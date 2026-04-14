---
title: "Methods"
chapter: 4
lesson: 1
description: "Go does not have classes."
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
  
  func (v Vertex) Abs() float64 {
  	return math.Sqrt(v.X*v.X + v.Y*v.Y)
  }
  
  func main() {
  	v := Vertex{3, 4}
  	fmt.Println(v.Abs())
  }
---
Go has no classes — but it does have **methods**.

A **method** is just a function with a special _receiver_ argument. The receiver sits between the `func` keyword and the method name, binding the function to a specific type.

In this example, `Abs` has a receiver of type `Vertex` named `v`. That's what makes it a method instead of a plain function.

**Try it:** run the code and see `Abs()` called on `v` like `v.Abs()`.
