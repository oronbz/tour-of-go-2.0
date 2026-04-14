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
Put closures to work.

Implement `fibonacci` so that it returns a closure. Each time you call that closure, it returns the next number in the Fibonacci sequence: 0, 1, 1, 2, 3, 5, ...

The state (the previous two numbers) lives inside the closure — no global variables needed.
