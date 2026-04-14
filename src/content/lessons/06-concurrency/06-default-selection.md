---
title: "Default Selection"
chapter: 6
lesson: 6
description: "The default case in a select is run if no other case is ready."
isExercise: false
code: |
  package main
  
  import (
  	"fmt"
  	"time"
  )
  
  func main() {
  	start := time.Now()
  	tick := time.Tick(100 * time.Millisecond)
  	boom := time.After(500 * time.Millisecond)
  	elapsed := func() time.Duration {
  		return time.Since(start).Round(time.Millisecond)
  	}
  	for {
  		select {
  		case <-tick:
  			fmt.Printf("[%6s] tick.\n", elapsed())
  		case <-boom:
  			fmt.Printf("[%6s] BOOM!\n", elapsed())
  			return
  		default:
  			fmt.Printf("[%6s]     .\n", elapsed())
  			time.Sleep(50 * time.Millisecond)
  		}
  	}
  }
---
The `default` case in a `select` is run if no other case is ready.

Use a `default` case to try a send or receive without blocking:

```go
select {
case i := <-c:
	// use i
default:
	// receiving from c would block
}
```
