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
Variables declared without an explicit initial value are given their
_zero_value_.

The zero value is:

- `0` for numeric types,
- `false` for the boolean type, and
- `""` (the empty string) for strings.
