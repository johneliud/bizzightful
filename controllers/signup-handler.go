package controllers

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/johneliud/bizzightful/pkg"
	_ "github.com/lib/pq"

	"golang.org/x/crypto/bcrypt"
)

func SignUpHandler(w http.ResponseWriter, r *http.Request) {
	// Handle CORS.
	if r.Method == "OPTIONS" {
		w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		w.WriteHeader(http.StatusOK)
		return
	}

	if r.Method == "GET" {
		RenderTemplate(w, r, "signup.html", nil)
		return
	}

	if r.Method != "POST" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	w.Header().Set("Content-Type", "application/json")

	// Ensure database connection exists
	if pkg.DB == nil {
		log.Println("Database connection is nil")
		http.Error(w, "Database connection error", http.StatusInternalServerError)
		return
	}

	// Parse and validate request body
	var requestData struct {
		Username string `json:"username"`
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&requestData); err != nil {
		log.Printf("Error decoding request body: %v", err)
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	if requestData.Username == "" || requestData.Email == "" || requestData.Password == "" {
		log.Println("Missing required fields")
		http.Error(w, "All fields are required", http.StatusBadRequest)
		return
	}

	// Hash password
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(requestData.Password), bcrypt.DefaultCost)
	if err != nil {
		log.Printf("Password hashing error: %v", err)
		http.Error(w, "Error processing password", http.StatusInternalServerError)
		return
	}
	
	// Insert user into database
	query := `INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3)`
	_, err = pkg.DB.Exec(query, requestData.Username, requestData.Email, hashedPassword)
	if err != nil {
		log.Printf("Database insertion error: %v", err)

		if err.Error() == `pq: duplicate key value violates unique constraint "users_username_key"` {
			http.Error(w, "Username already exists", http.StatusConflict)
		} else if err.Error() == `pq: duplicate key value violates unique constraint "users_email_key"` {
			http.Error(w, "Email already exists", http.StatusConflict)
		} else {
			http.Error(w, "Error creating user", http.StatusInternalServerError)
		}
		return
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(map[string]string{"message": "User created successfully!"})
}
