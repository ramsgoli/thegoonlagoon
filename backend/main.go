package main

import (
	"github.com/gorilla/mux"
	"thegoonlagoon/app"
	"thegoonlagoon/controllers"
	"net/http"
	"os"
	"fmt"
)

func main() {
	router := mux.NewRouter()
	router.Use(app.JwtAuthentication)

	router.HandleFunc("/api/user/login", controllers.Login).Methods("POST")

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	fmt.Println("Port: " + port)

	err := http.ListenAndServe(":" + port, router)
	if err != nil {
		fmt.Print(err)
	}
}
