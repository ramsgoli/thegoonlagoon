package models

import (
	"github.com/jinzhu/gorm"
	"golang.org/x/crypto/bcrypt"
	"thegoonlagoon/utils"
)

type Account struct {
	Username string `json:"username"`
	Password string `json:"password"`
	FirstName string `json:"first_name"`
	LastName string `json:"last_name"`
	gorm.Model
}

func (account *Account) Validate() (bool, map[string]interface{}) {
	temp := &Account{}
	err := db.Where("username = ?", account.Username).First(temp).Error
	if err != nil && err != gorm.ErrRecordNotFound {
		return false, utils.Message(false, "Error connecting to database")
	}

	if temp.Username != "" {
		// Account with given username already exists
		return false, utils.Message(false, "Account with username already exists")
	}

	return true, utils.Message(true, "OK")
}

func (account *Account) Create() (map[string]interface{}) {
	if ok, message:= account.Validate(); !ok {
		return message
	}

	hashedPassword, _ := bcrypt.GenerateFromPassword([]byte(account.Password), bcrypt.DefaultCost)
	account.Password = string(hashedPassword)

	db.Create(account)
	if account.ID <= 0 {
		message := utils.Message(false, "Unable to create account")
		return message
	}

	token, err := CreateToken(account.ID)
	if err != nil {
		message := utils.Message(false, "Unable to create account")
		return message
	}
	account.Password = ""

	message := utils.Message(true, "Account successfully created")
	message["account"] = account
	message["token"] = token

	return message
}

func Login(username string, password string) (map[string]interface{}) {
	account := &Account{}
	err := db.Where("username = ?", username).First(account).Error

	if err != nil && err != gorm.ErrRecordNotFound {
		return utils.Message(false, "Could not connect to db")
	}

	if err := bcrypt.CompareHashAndPassword([]byte(account.Password), []byte(password)); err != nil {
		return utils.Message(false, "Invalid Credentials")
	}

	// Login Was Successful
	token, err := CreateToken(account.ID)
	if err != nil {
		message := utils.Message(false, "Unable to login")
		return message
	}
	message := utils.Message(true, "Login successful")
	message["token"] = token

	return message
}
