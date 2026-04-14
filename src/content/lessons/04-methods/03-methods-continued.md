---
title: "Methods continued"
chapter: 4
lesson: 3
description: "You can declare a method on non-struct types, too."
isExercise: false
code: |
  package main
  
  import (
  	"fmt"
  	"math"
  )
  
  type MyFloat float64
  
  func (f MyFloat) Abs() float64 {
  	if f < 0 {
  		return float64(-f)
  	}
  	return float64(f)
  }
  
  func main() {
  	f := MyFloat(-math.Sqrt2)
  	fmt.Println(f.Abs())
  }
---
Methods aren't limited to structs. You can define them on any type — as long as it's defined in the same package.

Here, `MyFloat` is a numeric type with its own `Abs` method. No struct needed.

One rule: you can't define a method on a type from another package. That means no adding methods to `int`, `string`, or any other built-in type directly.

**Try it:** change `MyFloat` to a negative value and watch `Abs` handle it.
