package pkg

import (
	"html/template"
	"log"
	"path/filepath"

	"github.com/johneliud/bizzightful/controllers"
)

func InitTemplates() {
	templatesDir := "./frontend/templates"

	templateFiles, err := filepath.Glob(filepath.Join(templatesDir, "*.html"))
	if err != nil {
		log.Printf("Error finding template files: %v", err)
		return
	}

	controllers.Templates, err = template.ParseFiles(templateFiles...)
	if err != nil {
		log.Printf("Error parsing templates: %v", err)
		return
	}
}
