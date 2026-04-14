---
title: "Goroutines"
chapter: 6
lesson: 1
description: "A goroutine is a lightweight thread managed by the Go runtime."
isExercise: false
code: |
  package main
  
  import (
  	"fmt"
  	"time"
  )
  
  func say(s string) {
  	for i := 0; i < 5; i++ {
  		time.Sleep(100 * time.Millisecond)
  		fmt.Println(s)
  	}
  }
  
  func main() {
  	go say("world")
  	say("hello")
  }
---
**Goroutines** are Go's secret weapon — lightweight threads managed by the runtime. Spin up thousands of them without breaking a sweat.

```go
go f(x, y, z)
```

That's it. One keyword and `f` runs concurrently. The arguments (`f`, `x`, `y`, `z`) are evaluated in the current goroutine — execution of `f` happens in the new one.

Goroutines share the same address space, so if they touch shared memory you need to synchronize. The [`sync`](/pkg/sync/) package covers that, but Go's preferred tool is channels — you'll see why shortly.

**Try it:** watch how "world" and "hello" interleave. The scheduler decides the order, and it can change each run.
