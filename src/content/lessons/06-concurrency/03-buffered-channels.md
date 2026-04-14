---
title: "Buffered Channels"
chapter: 6
lesson: 3
description: "Channels can be buffered."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func main() {
  	ch := make(chan int, 2)
  	ch <- 1
  	ch <- 2
  	fmt.Println(<-ch)
  	fmt.Println(<-ch)
  }
---
Channels can be **buffered** — give them a capacity and they'll hold values without a receiver waiting on the other end.

```go
ch := make(chan int, 100)
```

A buffered channel only blocks on send when the buffer is full. It only blocks on receive when the buffer is empty. In between, sends and receives don't need to meet up.

**Try it:** change the buffer size to `1` and try sending two values. You'll get a deadlock — the second send blocks because the buffer is full and nobody is receiving.
