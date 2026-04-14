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
Add a **`default`** case to a `select` and it becomes non-blocking. If none of the channel cases are ready, `default` runs immediately instead of blocking.

```go
select {
case i := <-c:
	// use i
default:
	// receiving from c would block
}
```

This is the pattern for "try to communicate, but don't wait." It's useful for polling or checking channel state without getting stuck.

**Try it:** watch the output — the `default` case fires repeatedly (printing `.`) while the goroutine waits between ticks and the final boom.
