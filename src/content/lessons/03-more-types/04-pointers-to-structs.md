---
title: "Pointers to structs"
chapter: 3
lesson: 4
description: "Struct fields can be accessed through a struct pointer."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  type Vertex struct {
  	X int
  	Y int
  }
  
  func main() {
  	v := Vertex{1, 2}
  	p := &v
  	p.X = 1e9
  	fmt.Println(v)
  }
---
Struct fields can be accessed through a struct pointer.

To access the field `X` of a struct when we have the struct pointer `p` we could
write `(*p).X`.
However, that notation is cumbersome, so the language permits us instead to
write just `p.X`, without the explicit dereference.
