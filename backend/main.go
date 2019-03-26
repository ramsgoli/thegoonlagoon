package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"github.com/ramsgoli/thegoonlagoon/app"
	"github.com/ramsgoli/thegoonlagoon/controllers"
	"net/http"
	"os"
)

func main() {
	router := mux.NewRouter()
	router.Use(app.JwtAuthentication)

	router.HandleFunc("/api/user/login", controllers.Login).Methods("POST")
	router.HandleFunc("/api/user/signup", controllers.SignUp).Methods("POST")
	router.HandleFunc("/api/test", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Welcome"))
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	fmt.Println("Port: " + port)

	err := http.ListenAndServe(":"+port, router)
	if err != nil {
		fmt.Print(err)
	}
}
