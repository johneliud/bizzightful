package pkg

import (
	"database/sql"
	"fmt"
	"log"
	"os"
	"path/filepath"

	"github.com/johneliud/bizzightful/config"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

var DB *sql.DB

// SetDB allowing main to pass the database connection.
func SetDB(database *sql.DB) {
	DB = database
}

// GetDB return database connection
func GetDB() *sql.DB {
	return DB
}

func CloseDB() {
	if DB != nil {
		if err := DB.Close(); err != nil {
			log.Println("Error closing database connection:", err)
		}
	}
}

func InitDB() error {
	env := godotenv.Load(".env")
	if err := env; err != nil {
		log.Println("Error loading .env file:", err)
	}

	// Retrieve database connection parameters
	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	dbName := os.Getenv("DB_NAME")
	host := os.Getenv("DB_HOST")
	port := os.Getenv("DB_PORT")
	sslMode := os.Getenv("DB_SSLMODE")

	// Construct the connection string
	connStr := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=%s",
		host, port, user, password, dbName, sslMode,
	)

	// Open database connection
	var err error
	DB, err = sql.Open("postgres", connStr)
	if err != nil {
		return fmt.Errorf("error opening database: %v", err)
	}

	// Pass the database connection to handlers
	SetDB(DB)

	if err = DB.Ping(); err != nil {
		return fmt.Errorf("error connecting to the database: %v", err)
	}

	// Execute the database schema
	schemaPath := filepath.Join("db", "schema.sql")
	if err := config.ExecuteSchema(DB, schemaPath); err != nil {
		return fmt.Errorf("error executing database schema: %v", err)
	}

	return nil

}
