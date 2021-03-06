package app

import (
	"context"
	"github.com/dgrijalva/jwt-go"
	"github.com/ramsgoli/thegoonlagoon/models"
	"github.com/ramsgoli/thegoonlagoon/utils"
	"net/http"
	"os"
	"strings"
)

var notAuth = []string{
	"/api/user/signup",
	"/api/user/login",
}

func JwtAuthentication(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
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
			return []byte(os.Getenv("SIGNING_KEY")), nil
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
