---
title: "Choosing a value or pointer receiver"
chapter: 4
lesson: 8
description: "There are two reasons to use a pointer receiver."
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
  
  func (v *Vertex) Scale(f float64) {
  	v.X = v.X * f
  	v.Y = v.Y * f
  }
  
  func (v *Vertex) Abs() float64 {
  	return math.Sqrt(v.X*v.X + v.Y*v.Y)
  }
  
  func main() {
  	v := &Vertex{3, 4}
  	fmt.Printf("Before scaling: %+v, Abs: %v\n", v, v.Abs())
  	v.Scale(5)
  	fmt.Printf("After scaling: %+v, Abs: %v\n", v, v.Abs())
  }
---
So when do you use a **pointer receiver** vs a value receiver? Two good reasons to reach for a pointer:

1. You need to modify the receiver.
2. You want to avoid copying a large struct on every call.

In this example, `Abs` doesn't actually need to modify anything — but it still uses `*Vertex` to stay consistent with `Scale`.

That's the rule: pick one style for all methods on a type. Don't mix value and pointer receivers on the same type. It causes confusion — and problems with interfaces, which you'll see soon.
