package models

import (
	"github.com/dgrijalva/jwt-go"
	"os"
)

type Token struct {
	UserId uint
	jwt.StandardClaims
}

func CreateToken(userId uint) (string, error) {
	tk := Token{UserId: userId}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, tk)
	ss, err := token.SignedString([]byte(os.Getenv("signing_key")))
	if err != nil {
		return "", err
	}

	return ss, nil
}
