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
Once you drop the init and post, you can drop the semicolons too. What you're left with is Go's version of **`while`** — except it's still called `for`.

C's `while` is spelled `for` in Go. Same idea, cleaner syntax, one less keyword to remember.
