---
title: "Range and Close"
chapter: 6
lesson: 4
description: "A sender can close a channel to indicate that no more values will be sent."
isExercise: false
code: |
  package main
  
  import (
  	"fmt"
  )
  
  func fibonacci(n int, c chan int) {
  	x, y := 0, 1
  	for i := 0; i < n; i++ {
  		c <- x
  		x, y = y, x+y
  	}
  	close(c)
  }
  
  func main() {
  	c := make(chan int, 10)
  	go fibonacci(cap(c), c)
  	for i := range c {
  		fmt.Println(i)
  	}
  }
---
When a sender is done, it can **close** the channel to signal "no more values coming." Receivers can detect this:

```go
v, ok := <-ch
```

`ok` is `false` when the channel is closed and drained. You can also use `range` to pull values until the channel closes — cleaner and idiomatic:

```go
for i := range c { ... }
```

A few rules worth knowing:

- Only the **sender** should close a channel. Closing from the receiver side is a bug.
- Sending to a closed channel causes a **panic**.
- You don't always need to close. Only close when the receiver needs to know the stream is finished — like when you're using `range`.

**Try it:** remove the `close(c)` call and watch the `range` loop hang forever waiting for values that never come.
