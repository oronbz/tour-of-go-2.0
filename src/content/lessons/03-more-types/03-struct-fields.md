---
title: "Struct Fields"
chapter: 3
lesson: 3
description: "Struct fields are accessed using a dot."
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
  	v.X = 4
  	fmt.Println(v.X)
  }
---
Access **struct fields** with a dot. Read them, write them — same syntax either way.

**Try it:** Change `v.X = 4` to a different value and see the output update.
