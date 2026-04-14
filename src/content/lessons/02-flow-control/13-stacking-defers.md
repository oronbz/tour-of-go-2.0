---
title: "Stacking defers"
chapter: 2
lesson: 13
description: "Deferred function calls are pushed onto a stack."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func main() {
  	fmt.Println("counting")
  
  	for i := 0; i < 10; i++ {
  		defer fmt.Println(i)
  	}
  
  	fmt.Println("done")
  }
---
Multiple `defer` calls stack up. When the function returns, they execute in **last-in, first-out** order — like unwinding a stack.

This is intentional. It mirrors the natural way resources are acquired and released: if you open A, then B, you close B first, then A. `defer` makes that order automatic.

**Try it** — run the example and watch the numbers count down from 9 to 0.

To dig deeper into `defer`, check out the [blog post on defer, panic, and recover](/blog/defer-panic-and-recover).
