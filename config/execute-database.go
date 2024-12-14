package config

import (
	"database/sql"
	"fmt"
	"log"
	"os"
)

func ExecuteSchema(db *sql.DB, schemaPath string) error {
	schema, err := os.ReadFile(schemaPath)
	if err != nil {
		return fmt.Errorf("error reading schema file: %v", err)
	}

	_, err = db.Exec(string(schema))
	if err != nil {
		return fmt.Errorf("error executing schema: %v", err)
	}
	log.Println("Database schema executed successfully")
	return nil
}
