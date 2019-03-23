package controllers

import (
	"net/http"
	"encoding/json"
	"thegoonlagoon/models"
	"thegoonlagoon/utils"
)

func Login(w http.ResponseWriter, r *http.Request) {
	account := &models.Account{}
	err := json.NewDecoder(r.Body).Decode(account)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		message := utils.Message(false, "Bad Request")
		utils.Respond(w, message)
		return
	}

	message := utils.Message(true, "Success")
	utils.Respond(w, message)
}
