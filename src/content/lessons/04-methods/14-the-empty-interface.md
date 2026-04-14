---
title: "The empty interface"
chapter: 4
lesson: 14
description: "The interface type that specifies zero methods is known as the emptyinterface:

go
interface{}


An empty interface may hold values of any type."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func main() {
  	var i interface{}
  	describe(i)
  
  	i = 42
  	describe(i)
  
  	i = "hello"
  	describe(i)
  }
  
  func describe(i interface{}) {
  	fmt.Printf("(%v, %T)\n", i, i)
  }
---
An interface with zero methods is the **empty interface**:

```go
interface{}
```

Every type satisfies it — since every type implements at least zero methods. That means `interface{}` can hold any value of any type.

You'll see it wherever code needs to handle unknown types: `fmt.Print`, JSON decoding, generic containers. It's Go's escape hatch from the type system.

**Try it:** watch `i` hold an `int`, then a `string`. The `describe` function prints the value and type each time.
