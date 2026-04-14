---
title: "Zero values"
chapter: 1
lesson: 12
description: "Variables declared without an explicit initial value are given their
zerovalue."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func main() {
  	var i int
  	var f float64
  	var b bool
  	var s string
  	fmt.Printf("%v %v %v %q\n", i, f, b, s)
  }
---
Declare a variable without a value and Go gives it a **zero value** automatically. No garbage data, no surprises.

- `0` for numeric types
- `false` for booleans
- `""` for strings

This means you never have an uninitialized variable in Go.
