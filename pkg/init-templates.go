package pkg

import (
	"html/template"
	"log"
	"path/filepath"
)

var Templates *template.Template

func InitTemplates() {
	templatesDir := "./frontend/templates"

	templateFiles, err := filepath.Glob(filepath.Join(templatesDir, "*.html"))
	if err != nil {
		log.Printf("Error finding template files: %v", err)
		return
	}

	Templates, err = template.ParseFiles(templateFiles...)
	if err != nil {
		log.Printf("Error parsing templates: %v", err)
		return
	}
}
