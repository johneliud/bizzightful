package main

import (
	"log"
	"net/http"
	"os"

	"github.com/johneliud/bizzightful/controllers"
	"github.com/johneliud/bizzightful/pkg"
	_ "github.com/lib/pq"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Println("Error loading .env file, using system env")
	}

	if err := pkg.InitDB(); err != nil {
		log.Fatal("Database initialization failed:", err)
	}
	defer pkg.CloseDB()

	pkg.InitTemplates()

	// Serve static files
	fs := http.FileServer(http.Dir("frontend/static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	http.HandleFunc("/", controllers.IndexHandler)
	http.HandleFunc("/signup", controllers.SignUpHandler)
	http.HandleFunc("/signin", controllers.SignInHandler)
	http.HandleFunc("/dashboard", controllers.DashboardHandler)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server starting on port http://localhost:%s", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
