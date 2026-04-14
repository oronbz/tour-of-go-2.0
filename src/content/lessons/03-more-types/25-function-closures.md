---
title: "Function closures"
chapter: 3
lesson: 25
description: "Go functions may be closures."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func adder() func(int) int {
  	sum := 0
  	return func(x int) int {
  		sum += x
  		return sum
  	}
  }
  
  func main() {
  	pos, neg := adder(), adder()
  	for i := 0; i < 10; i++ {
  		fmt.Println(
  			pos(i),
  			neg(-2*i),
  		)
  	}
  }
---
A **closure** is a function that captures variables from the scope around it. The function can read and update those variables — and they persist between calls.

In the example, `adder` returns a closure that accumulates into its own `sum`. Each call to `adder()` creates an independent closure with its own `sum`.

**Try it:** Notice that `pos` and `neg` each have separate state — they don't share `sum`.
