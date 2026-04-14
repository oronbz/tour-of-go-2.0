---
title: "Defer"
chapter: 2
lesson: 12
description: "A defer statement defers the execution of a function until the surrounding
function returns."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func main() {
  	defer fmt.Println("world")
  
  	fmt.Println("hello")
  }
---
**`defer`** schedules a function call to run just before the surrounding function returns — no matter how it returns (normally, early, or with a panic).

It's one of Go's most practical features. You'll use it constantly for cleanup: closing files, releasing locks, stopping timers. Write the cleanup right next to the setup, and `defer` handles the timing.

One important detail: the arguments to a deferred call are evaluated immediately when `defer` is encountered — only the execution is delayed.

**Try it** — run the example. Notice that "world" prints after "hello", even though `defer` appears first in the code.
