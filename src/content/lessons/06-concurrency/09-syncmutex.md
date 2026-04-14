---
title: "sync.Mutex"
chapter: 6
lesson: 9
description: "We've seen how channels are great for communication among goroutines."
isExercise: false
code: |
  package main
  
  import (
  	"fmt"
  	"sync"
  	"time"
  )
  
  // SafeCounter is safe to use concurrently.
  type SafeCounter struct {
  	mu sync.Mutex
  	v  map[string]int
  }
  
  // Inc increments the counter for the given key.
  func (c *SafeCounter) Inc(key string) {
  	c.mu.Lock()
  	// Lock so only one goroutine at a time can access the map c.v.
  	c.v[key]++
  	c.mu.Unlock()
  }
  
  // Value returns the current value of the counter for the given key.
  func (c *SafeCounter) Value(key string) int {
  	c.mu.Lock()
  	// Lock so only one goroutine at a time can access the map c.v.
  	defer c.mu.Unlock()
  	return c.v[key]
  }
  
  func main() {
  	c := SafeCounter{v: make(map[string]int)}
  	for i := 0; i < 1000; i++ {
  		go c.Inc("somekey")
  	}
  
  	time.Sleep(time.Second)
  	fmt.Println(c.Value("somekey"))
  }
---
Channels are perfect when goroutines need to communicate. But sometimes you just need to protect a piece of shared state — no messaging required. That's where a **mutex** comes in.

**Mutual exclusion** means only one goroutine can access a section of code at a time. Go's [`sync.Mutex`](/pkg/sync/#Mutex) provides exactly that with two methods:

- `Lock` — claim exclusive access
- `Unlock` — release it

Wrap the code you want to protect between `Lock` and `Unlock`. Only one goroutine gets through at a time; the rest wait.

For cleanup, pair `Lock` with `defer Unlock` — as shown in the `Value` method. The mutex unlocks the moment the function returns, even if it panics.

**Try it:** remove the `Lock`/`Unlock` calls and run 1000 concurrent increments. The final count will be wrong — that's a data race in action.
