package controllers

import "net/http"

func DashboardHandler(w http.ResponseWriter, r *http.Request) {
	RenderTemplate(w, r, "dashboard.html", nil)
}
