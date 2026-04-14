---
title: "Constants"
chapter: 1
lesson: 15
description: "Constants are declared like variables, but with the const keyword."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  const Pi = 3.14
  
  func main() {
  	const World = "世界"
  	fmt.Println("Hello", World)
  	fmt.Println("Happy", Pi, "Day")
  
  	const Truth = true
  	fmt.Println("Go rules?", Truth)
  }
---
**Constants** are declared like variables but with the `const` keyword. They can hold character, string, boolean, or numeric values.

One rule: you can't use `:=` to declare a constant. That shorthand is for variables only.
