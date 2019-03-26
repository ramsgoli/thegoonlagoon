package models

import (
	"fmt"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/joho/godotenv"
	"os"
)

var db *gorm.DB

func init() {
	err := godotenv.Load()
	if err != nil {
		fmt.Println(err)
		return
	}

	host := os.Getenv("DB_HOST")
	name := os.Getenv("DB_NAME")
	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	port := os.Getenv("DB_PORT")

	dbUri := fmt.Sprintf("host=%s user=%s dbname=%s port=%s password=%s sslmode=disable", host, user, name, port, password)
	conn, err := gorm.Open("postgres", dbUri)
	if err != nil {
		fmt.Println(err)
		return
	}

	db = conn

	// Migrate the schema
	db.AutoMigrate(&Account{})

}

func GetDB() *gorm.DB {
	return db
}
