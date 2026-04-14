---
title: "Methods and pointer indirection"
chapter: 4
lesson: 6
description: "Comparing the previous two programs, you might notice that
functions with a pointer argument must take a pointer:

go
var v Vertex
ScaleFuncv, 5  // Compile err"
isExercise: false
code: |
  package main
  
  import "fmt"
  
  type Vertex struct {
  	X, Y float64
  }
  
  func (v *Vertex) Scale(f float64) {
  	v.X = v.X * f
  	v.Y = v.Y * f
  }
  
  func ScaleFunc(v *Vertex, f float64) {
  	v.X = v.X * f
  	v.Y = v.Y * f
  }
  
  func main() {
  	v := Vertex{3, 4}
  	v.Scale(2)
  	ScaleFunc(&v, 10)
  
  	p := &Vertex{4, 3}
  	p.Scale(3)
  	ScaleFunc(p, 8)
  
  	fmt.Println(v, p)
  }
---
Here's something useful: **pointer receiver methods are more flexible than pointer-argument functions**.

A plain function with a pointer argument requires a pointer — no exceptions:

```go
var v Vertex
ScaleFunc(v, 5)  // Compile error!
ScaleFunc(&v, 5) // OK
```

But a method with a pointer receiver accepts both a value and a pointer:

```go
var v Vertex
v.Scale(5)  // OK
p := &v
p.Scale(10) // OK
```

Go handles the conversion automatically. `v.Scale(5)` becomes `(&v).Scale(5)` behind the scenes. It's a convenience — you don't have to think about it.
