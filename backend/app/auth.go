package app

import (
	"thegoonlagoon/utils"
	"thegoonlagoon/models"
	"github.com/dgrijalva/jwt-go"
	"net/http"
	"strings"
	"context"
	"os"
)

func JwtAuthentication(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		notAuth := []string{"/api/user/signup", "/api/user/login"}
		requestPath := r.URL.Path

		for _, value := range notAuth {
			if value == requestPath {
				next.ServeHTTP(w, r)
				return
			}
		}

		response := make(map[string]interface{})
		tokenHeader := r.Header.Get("Authorization")

		if tokenHeader == "" {
			response = utils.Message(false, "Missing auth token")
			w.Header().Add("Content-Type", "application/json")
			w.WriteHeader(http.StatusForbidden)
			utils.Respond(w, response)
			return
		}

		splitted := strings.Split(tokenHeader, " ")
		if len(splitted) != 2 {
			response = utils.Message(false, "Malformed token")
			w.Header().Add("Content-Type", "application/json")
			w.WriteHeader(http.StatusForbidden)
			utils.Respond(w, response)
			return
		}

		tk := models.Token{}
		token, err := jwt.ParseWithClaims(splitted[1], &tk, func(token *jwt.Token) (interface{}, error) {
			return []byte(os.Getenv("signing_key")), nil
		})

		if err != nil {
			response = utils.Message(false, "Malformed token")
			w.Header().Add("Content-Type", "application/json")
			w.WriteHeader(http.StatusForbidden)
			utils.Respond(w, response)
			return
		}

		if !token.Valid {
			response = utils.Message(false, "Token is not valid")
			w.Header().Add("Content-Type", "application/json")
			w.WriteHeader(http.StatusForbidden)
			utils.Respond(w, response)
			return
		}

		ctx := context.WithValue(r.Context(), "user", tk.UserId)
		r = r.WithContext(ctx)
		next.ServeHTTP(w, r)
	})
}
