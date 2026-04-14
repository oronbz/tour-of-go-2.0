---
title: "Interfaces"
chapter: 4
lesson: 9
description: "An interfacetype is defined as a set of method signatures."
isExercise: false
code: |
  package main
  
  import (
  	"fmt"
  	"math"
  )
  
  type Abser interface {
  	Abs() float64
  }
  
  func main() {
  	var a Abser
  	f := MyFloat(-math.Sqrt2)
  	v := Vertex{3, 4}
  
  	a = f  // a MyFloat implements Abser
  	a = &v // a *Vertex implements Abser
  
  	// In the following line, v is a Vertex (not *Vertex)
  	// and does NOT implement Abser.
  	a = v
  
  	fmt.Println(a.Abs())
  }
  
  type MyFloat float64
  
  func (f MyFloat) Abs() float64 {
  	if f < 0 {
  		return float64(-f)
  	}
  	return float64(f)
  }
  
  type Vertex struct {
  	X, Y float64
  }
  
  func (v *Vertex) Abs() float64 {
  	return math.Sqrt(v.X*v.X + v.Y*v.Y)
  }
---
An **interface type** is a set of method signatures. Any type that implements those methods satisfies the interface — automatically.

A variable of interface type can hold any value that implements the required methods.

**Note:** There's an intentional error on line 22. `Vertex` (the value type) doesn't implement `Abser` because `Abs` is defined on `*Vertex` (the pointer type). **Try it:** run the code and read the compile error, then fix it by changing `a = v` to `a = &v`.
