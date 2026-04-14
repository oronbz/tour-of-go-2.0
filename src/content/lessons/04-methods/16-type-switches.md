---
title: "Type switches"
chapter: 4
lesson: 16
description: "A typeswitch is a construct that permits several type assertions in series."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func do(i interface{}) {
  	switch v := i.(type) {
  	case int:
  		fmt.Printf("Twice %v is %v\n", v, v*2)
  	case string:
  		fmt.Printf("%q is %v bytes long\n", v, len(v))
  	default:
  		fmt.Printf("I don't know about type %T!\n", v)
  	}
  }
  
  func main() {
  	do(21)
  	do("hello")
  	do(true)
  }
---
Need to branch on multiple types? A **type switch** lets you do several type assertions in one clean construct.

```go
switch v := i.(type) {
case T:
	// here v has type T
case S:
	// here v has type S
default:
	// no match; here v has the same type as i
}
```

The syntax is like a type assertion — `i.(type)` — except you use the keyword `type` instead of a specific type name. In each case branch, `v` is automatically typed correctly.

**Try it:** `do(true)` hits the default case. Add a `case bool:` branch and see what happens.
