---
title: "Switch evaluation order"
chapter: 2
lesson: 10
description: "Switch cases evaluate cases from top to bottom, stopping when a case succeeds."
isExercise: false
code: |
  package main
  
  import (
  	"fmt"
  	"time"
  )
  
  func main() {
  	fmt.Println("When's Saturday?")
  	today := time.Now().Weekday()
  	switch time.Saturday {
  	case today + 0:
  		fmt.Println("Today.")
  	case today + 1:
  		fmt.Println("Tomorrow.")
  	case today + 2:
  		fmt.Println("In two days.")
  	default:
  		fmt.Println("Too far away.")
  	}
  }
---
Switch cases are evaluated **top to bottom**, and evaluation stops the moment a case matches. Cases that come after a match are never evaluated.

This matters when your cases have side effects. For example:

```go
switch i {
case 0:
case f():
}
```

If `i == 0`, the first case matches immediately — `f()` is never called. Keep that in mind when putting function calls in your cases.
