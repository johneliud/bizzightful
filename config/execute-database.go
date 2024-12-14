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
		log.Printf("Error reading schema file from %s: %v", schemaPath, err)
		return fmt.Errorf("error reading schema file: %v", err)
	}

	_, err = db.Exec(string(schema))
	if err != nil {
		log.Printf("Error executing schema: %v", err)
		return fmt.Errorf("error executing schema: %v", err)
	}
	return nil
}
