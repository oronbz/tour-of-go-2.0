---
title: "Methods and pointer indirection (2)"
chapter: 4
lesson: 7
description: "The equivalent thing happens in the reverse direction."
isExercise: false
code: |
  package main
  
  import (
  	"fmt"
  	"math"
  )
  
  type Vertex struct {
  	X, Y float64
  }
  
  func (v Vertex) Abs() float64 {
  	return math.Sqrt(v.X*v.X + v.Y*v.Y)
  }
  
  func AbsFunc(v Vertex) float64 {
  	return math.Sqrt(v.X*v.X + v.Y*v.Y)
  }
  
  func main() {
  	v := Vertex{3, 4}
  	fmt.Println(v.Abs())
  	fmt.Println(AbsFunc(v))
  
  	p := &Vertex{4, 3}
  	fmt.Println(p.Abs())
  	fmt.Println(AbsFunc(*p))
  }
---
The same flexibility works in reverse for **value receivers**.

A function taking a value argument requires exactly a value — pass a pointer and it won't compile:

```go
var v Vertex
fmt.Println(AbsFunc(v))  // OK
fmt.Println(AbsFunc(&v)) // Compile error!
```

But a method with a value receiver accepts both:

```go
var v Vertex
fmt.Println(v.Abs()) // OK
p := &v
fmt.Println(p.Abs()) // OK
```

When you call `p.Abs()` on a pointer, Go automatically dereferences it: `(*p).Abs()`. Clean and consistent.
