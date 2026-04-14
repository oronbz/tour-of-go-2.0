---
title: "Functions"
chapter: 1
lesson: 4
description: "A function can take zero or more arguments."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func add(x int, y int) int {
  	return x + y
  }
  
  func main() {
  	fmt.Println(add(42, 13))
  }
---
**Functions** in Go can take zero or more arguments. Notice that the type comes _after_ the variable name — `x int`, not `int x`. That's different from C or Java, but you'll get used to it fast.

In this example, `add` takes two `int` parameters and returns an `int`.

(Curious why types are written this way? The [Go declaration syntax article](/blog/gos-declaration-syntax) explains the reasoning.)
