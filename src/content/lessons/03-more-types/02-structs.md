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
A **struct** is a collection of fields grouped together under one type. Think of it as a lightweight object — no methods required, just data.

**Try it:** Run the example and see how `Vertex{1, 2}` prints as `{1 2}`.
