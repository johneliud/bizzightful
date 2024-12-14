package controllers

import (
	"net/http"
)

func IndexHandler(w http.ResponseWriter, r *http.Request) {
	RenderTemplate(w, r, "index.html", nil)
}