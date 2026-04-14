---
title: "Interface values"
chapter: 4
lesson: 11
description: "Under the hood, interface values can be thought of as a tuple of a value and a
concrete type:

go
value, type


An interface value holds a value of a specific u"
isExercise: false
code: |
  package main
  
  import (
  	"fmt"
  	"math"
  )
  
  type I interface {
  	M()
  }
  
  type T struct {
  	S string
  }
  
  func (t *T) M() {
  	fmt.Println(t.S)
  }
  
  type F float64
  
  func (f F) M() {
  	fmt.Println(f)
  }
  
  func main() {
  	var i I
  
  	i = &T{"Hello"}
  	describe(i)
  	i.M()
  
  	i = F(math.Pi)
  	describe(i)
  	i.M()
  }
  
  func describe(i I) {
  	fmt.Printf("(%v, %T)\n", i, i)
  }
---
Under the hood, an **interface value** is a pair: a concrete value and its type.

```go
(value, type)
```

When you call a method on an interface, Go dispatches to the method on the underlying concrete type.

**Try it:** the `describe` helper prints both the value and the type for each assignment. Watch how they change as `i` holds first a `*T`, then an `F`.
