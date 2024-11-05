package main

import (
	"log"
	"net/http"
)

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/about", handleAbout)
	err := http.ListenAndServe(":8080", mux)
	if err != nil {
		log.Println(err)
		return
	}
}

func handleAbout(w http.ResponseWriter, r *http.Request) {
	resp, err := w.Write([]byte("Meow"))
	if err != nil {
		log.Printf("resp: %d with err: %s", resp, err)
		return
	}
}
