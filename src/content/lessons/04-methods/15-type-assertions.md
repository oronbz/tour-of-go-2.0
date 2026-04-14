---
title: "Type assertions"
chapter: 4
lesson: 15
description: "A typeassertion provides access to an interface value's underlying concrete value."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func main() {
  	var i interface{} = "hello"
  
  	s := i.(string)
  	fmt.Println(s)
  
  	s, ok := i.(string)
  	fmt.Println(s, ok)
  
  	f, ok := i.(float64)
  	fmt.Println(f, ok)
  
  	f = i.(float64) // panic
  	fmt.Println(f)
  }
---
A **type assertion** lets you pull the concrete value out of an interface.

```go
t := i.(T)
```

This says: "I know `i` holds a `T` — give me the `T`." If you're wrong, it panics.

The safer form uses two return values:

```go
t, ok := i.(T)
```

If `i` holds a `T`, you get the value and `ok` is `true`. If not, `ok` is `false`, `t` is the zero value, and there's no panic.

This should feel familiar — it's the same pattern as reading from a map.

**Try it:** the last line in `main` does an unsafe assertion on a `float64`. Run it and watch it panic.
