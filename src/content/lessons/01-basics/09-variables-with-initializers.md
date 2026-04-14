---
title: "Variables with initializers"
chapter: 1
lesson: 9
description: "A var declaration can include initializers, one per variable."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  var i, j int = 1, 2
  
  func main() {
  	var c, python, java = true, false, "no!"
  	fmt.Println(i, j, c, python, java)
  }
---
You can initialize variables right in the `var` declaration. When you do, the type is optional — Go infers it from the value you provide.
