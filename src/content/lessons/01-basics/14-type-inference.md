---
title: "Type inference"
chapter: 1
lesson: 14
description: "When declaring a variable without specifying an explicit type either by using the := syntax or var= expression syntax, the variable's type is inferred from the "
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func main() {
  	v := 42 // change me!
  	fmt.Printf("v is of type %T\n", v)
  }
---
When you use `:=` or `var` without a type, Go infers the type from the right-hand side. This is **type inference** — less typing, same safety.

If the right-hand side is a typed value, the new variable gets that type:

```go
var i int
j := i // j is an int
```

If it's an untyped numeric constant, Go picks the type based on precision:

```go
i := 42           // int
f := 3.142        // float64
g := 0.867 + 0.5i // complex128
```

**Give it a shot** — change the value of `v` in the example and watch how its inferred type changes.
