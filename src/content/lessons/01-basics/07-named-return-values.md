---
title: "Named return values"
chapter: 1
lesson: 7
description: "Go's return values may be named."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func split(sum int) (x, y int) {
  	x = sum * 4 / 9
  	y = sum - x
  	return
  }
  
  func main() {
  	fmt.Println(split(17))
  }
---
Go lets you give return values **names**. When you do, they act as variables initialized at the top of the function — and they serve as documentation for what the function actually returns.

A bare `return` with no arguments sends back the current values of those named returns. This is called a **naked return**.

Keep naked returns to short functions only. In longer functions, they make the code harder to follow.
