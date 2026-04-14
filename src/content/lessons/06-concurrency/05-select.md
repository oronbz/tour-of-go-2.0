---
title: "Select"
chapter: 6
lesson: 5
description: "The select statement lets a goroutine wait on multiple communication operations."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func fibonacci(c, quit chan int) {
  	x, y := 0, 1
  	for {
  		select {
  		case c <- x:
  			x, y = y, x+y
  		case <-quit:
  			fmt.Println("quit")
  			return
  		}
  	}
  }
  
  func main() {
  	c := make(chan int)
  	quit := make(chan int)
  	go func() {
  		for i := 0; i < 10; i++ {
  			fmt.Println(<-c)
  		}
  		quit <- 0
  	}()
  	fibonacci(c, quit)
  }
---
**Select** is like a `switch` for channels. It lets a goroutine wait on multiple channel operations at once and act on whichever is ready first.

A `select` blocks until one of its cases can proceed. If multiple cases are ready at the same time, Go picks one at random — no priority, no starvation.

**Try it:** trace through the fibonacci example. The goroutine in `main` reads 10 values then sends on `quit`. The `select` inside `fibonacci` handles both the "produce a value" case and the "stop now" case cleanly — no polling, no flags.
