---
title: "Variables"
chapter: 1
lesson: 8
description: "The var statement declares a list of variables; as in function argument lists, the type is last."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  var c, python, java bool
  
  func main() {
  	var i int
  	fmt.Println(i, c, python, java)
  }
---
The **`var`** statement declares one or more variables. Like function parameters, the type goes at the end.

You can use `var` at the package level or inside a function — this example shows both.
