---
title: "Multiple results"
chapter: 1
lesson: 6
description: "A function can return any number of results."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func swap(x, y string) (string, string) {
  	return y, x
  }
  
  func main() {
  	a, b := swap("hello", "world")
  	fmt.Println(a, b)
  }
---
Go functions can return **multiple values** — no need to wrap them in a struct or use output parameters. You'll use this constantly, especially for returning a result alongside an error.

Here, `swap` returns two strings and the caller unpacks them directly.
