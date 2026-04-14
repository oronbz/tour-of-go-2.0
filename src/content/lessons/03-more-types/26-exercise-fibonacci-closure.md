---
title: "Exercise: Fibonacci closure"
chapter: 3
lesson: 26
description: "Let's have some fun with functions."
isExercise: true
code: |
  package main
  
  import "fmt"
  
  // fibonacci is a function that returns
  // a function that returns an int.
  func fibonacci() func() int {
  }
  
  func main() {
  	f := fibonacci()
  	for i := 0; i < 10; i++ {
  		fmt.Println(f())
  	}
  }
---
Let's have some fun with functions.

Implement a `fibonacci` function that returns a function (a closure) that
returns successive [fibonacci numbers](https://en.wikipedia.org/wiki/Fibonacci_number)
(0, 1, 1, 2, 3, 5, ...).
