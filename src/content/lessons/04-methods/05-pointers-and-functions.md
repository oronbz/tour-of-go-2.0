---
title: "Pointers and functions"
chapter: 4
lesson: 5
description: "Here we see the Abs and Scale methods rewritten as functions."
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
  
  func Scale(v *Vertex, f float64) {
  	v.X = v.X * f
  	v.Y = v.Y * f
  }
  
  func main() {
  	v := Vertex{3, 4}
  	Scale(&v, 10)
  	fmt.Println(Abs(v))
  }
---
Same logic, different form. Here `Abs` and `Scale` are plain functions, not methods.

Notice that `Scale` takes a `*Vertex` — it must, because it needs to mutate the value. And the call site has to pass `&v` explicitly.

**Try it:** remove the `*` from `Scale`'s parameter on line 16. What breaks? What else do you have to change to make it compile again?
