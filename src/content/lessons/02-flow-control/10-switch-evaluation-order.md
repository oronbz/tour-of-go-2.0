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
Switch cases evaluate cases from top to bottom, stopping when a case succeeds.

(For example,

```go
switch i {
case 0:
case f():
}
```

does not call `f` if `i==0`.)
