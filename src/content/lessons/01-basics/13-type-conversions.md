---
title: "Type conversions"
chapter: 1
lesson: 13
description: "The expression Tv converts the value v to the type T."
isExercise: false
code: |
  package main
  
  import (
  	"fmt"
  	"math"
  )
  
  func main() {
  	var x, y int = 3, 4
  	var f float64 = math.Sqrt(float64(x*x + y*y))
  	var z uint = uint(f)
  	fmt.Println(x, y, z)
  }
---
Go does not do implicit type conversion. Ever. To convert between types, you call `T(v)` — wrapping the value `v` in the target type `T`.

```go
i := 42
f := float64(i)
u := uint(f)
```

This is intentional. Implicit conversions are a common source of bugs in other languages — Go forces you to be explicit.

**Try it** — remove the `float64` or `uint` conversion in the example and see what the compiler says.
