---
title: "Function values"
chapter: 3
lesson: 24
description: "Functions are values too."
isExercise: false
code: |
  package main
  
  import (
  	"fmt"
  	"math"
  )
  
  func compute(fn func(float64, float64) float64) float64 {
  	return fn(3, 4)
  }
  
  func main() {
  	hypot := func(x, y float64) float64 {
  		return math.Sqrt(x*x + y*y)
  	}
  	fmt.Println(hypot(5, 12))
  
  	fmt.Println(compute(hypot))
  	fmt.Println(compute(math.Pow))
  }
---
In Go, **functions are values**. You can assign them to variables, pass them into other functions, and return them — just like any other type.

This makes patterns like callbacks and higher-order functions straightforward.

**Try it:** Pass `math.Sqrt` to `compute` and see what comes back.
