---
title: "Structs"
chapter: 3
lesson: 2
description: "A struct is a collection of fields."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  type Vertex struct {
  	X int
  	Y int
  }
  
  func main() {
  	fmt.Println(Vertex{1, 2})
  }
---
A `struct` is a collection of fields.
