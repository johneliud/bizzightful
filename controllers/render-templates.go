package controllers

import (
	"html/template"
	"log"
	"net/http"
)

var Templates *template.Template

func RenderTemplate(w http.ResponseWriter, r *http.Request, templateName string, data interface{}) {
	err := Templates.ExecuteTemplate(w, templateName, data)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		log.Printf("Error executing template: %v", err)
		return
	}
}