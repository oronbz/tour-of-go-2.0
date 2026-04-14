---
title: "Struct Literals"
chapter: 3
lesson: 5
description: "A struct literal denotes a newly allocated struct value by listing the values of its fields."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  type Vertex struct {
  	X, Y int
  }
  
  var (
  	v1 = Vertex{1, 2}  // has type Vertex
  	v2 = Vertex{X: 1}  // Y:0 is implicit
  	v3 = Vertex{}      // X:0 and Y:0
  	p  = &Vertex{1, 2} // has type *Vertex
  )
  
  func main() {
  	fmt.Println(v1, p, v2, v3)
  }
---
A **struct literal** creates a new struct value inline by listing its fields.

You can name each field explicitly using `Name: value` syntax — order doesn't matter, and any fields you leave out default to zero. Or skip the names and list values positionally.

Prefix with `&` to get a pointer to the struct instead of a copy.
