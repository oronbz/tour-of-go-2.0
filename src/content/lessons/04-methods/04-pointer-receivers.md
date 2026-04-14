---
title: "Pointer receivers"
chapter: 4
lesson: 4
description: "You can declare methods with pointer receivers."
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
  
  func (v *Vertex) Scale(f float64) {
  	v.X = v.X * f
  	v.Y = v.Y * f
  }
  
  func main() {
  	v := Vertex{3, 4}
  	v.Scale(10)
  	fmt.Println(v.Abs())
  }
---
Want a method to actually change its receiver? Use a **pointer receiver**.

The syntax is `*T` — a pointer to the type. Here, `Scale` is defined on `*Vertex`, so it can modify `v.X` and `v.Y` directly.

Without a pointer receiver, the method gets a copy. Changes stay local and disappear. Since methods frequently need to mutate state, pointer receivers are more common than value receivers.

**Try it:** remove the `*` from `Scale`'s receiver on line 16 and re-run. Notice the output changes — `Scale` no longer affects the original `Vertex`.
