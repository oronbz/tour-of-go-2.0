---
title: "Channels"
chapter: 6
lesson: 2
description: "Channels are a typed conduit through which you can send and receive values with the channel operator, <-."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func sum(s []int, c chan int) {
  	sum := 0
  	for _, v := range s {
  		sum += v
  	}
  	c <- sum // send sum to c
  }
  
  func main() {
  	s := []int{7, 2, 8, -9, 4, 0}
  
  	c := make(chan int)
  	go sum(s[:len(s)/2], c)
  	go sum(s[len(s)/2:], c)
  	x, y := <-c, <-c // receive from c
  
  	fmt.Println(x, y, x+y)
  }
---
**Channels** are how goroutines talk to each other — typed pipes you send values through and receive values from, using the `<-` operator.

```go
ch <- v    // Send v to channel ch.
v := <-ch  // Receive from ch, and
         // assign value to v.
```

The data flows in the direction of the arrow. Like maps and slices, channels need to be created before use:

```go
ch := make(chan int)
```

By default, sends and receives block until both sides are ready. That blocking behavior is the feature — it's built-in synchronization with no locks required.

**Try it:** the example splits a slice across two goroutines, sums each half in parallel, then collects both results through a single channel. Two receives, two answers, one final sum.
