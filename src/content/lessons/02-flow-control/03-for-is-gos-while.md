---
title: "For is Go's \"while\""
chapter: 2
lesson: 3
description: "At that point you can drop the semicolons: C's while is spelled for in Go."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func main() {
  	sum := 1
  	for sum < 1000 {
  		sum += sum
  	}
  	fmt.Println(sum)
  }
---
At that point you can drop the semicolons: C's `while` is spelled `for` in Go.
