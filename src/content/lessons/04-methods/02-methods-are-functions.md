---
title: "Methods are functions"
chapter: 4
lesson: 2
description: "Remember: a method is just a function with a receiver argument."
isExercise: false
code: |
  package main
  
  import (
  	"fmt"
  	"math"
  )
  
  type Vertex struct {
  	X, Y float64
  }
  
  func Abs(v Vertex) float64 {
  	return math.Sqrt(v.X*v.X + v.Y*v.Y)
  }
  
  func main() {
  	v := Vertex{3, 4}
  	fmt.Println(Abs(v))
  }
---
A method is just a function with a receiver. That's it.

Here's `Abs` rewritten as a plain function — same logic, no receiver. The result is identical.

**Try it:** compare this to the previous example. The only structural difference is where `v` appears.
