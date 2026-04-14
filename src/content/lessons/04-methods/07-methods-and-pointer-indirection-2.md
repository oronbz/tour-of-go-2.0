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
The equivalent thing happens in the reverse direction.

Functions that take a value argument must take a value of that specific type:

```go
var v Vertex
fmt.Println(AbsFunc(v))  // OK
fmt.Println(AbsFunc(&v)) // Compile error!
```

while methods with value receivers take either a value or a pointer as the
receiver when they are called:

```go
var v Vertex
fmt.Println(v.Abs()) // OK
p := &v
fmt.Println(p.Abs()) // OK
```

In this case, the method call `p.Abs()` is interpreted as `(*p).Abs()`.
