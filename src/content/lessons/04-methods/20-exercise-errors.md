---
title: "Exercise: Errors"
chapter: 4
lesson: 20
description: "Copy your Sqrt function from the earlier exercise/tour/flowcontrol/8 and modify it to return an error value."
isExercise: true
code: |
  package main
  
  import (
  	"fmt"
  )
  
  func Sqrt(x float64) (float64, error) {
  	return 0, nil
  }
  
  func main() {
  	fmt.Println(Sqrt(2))
  	fmt.Println(Sqrt(-2))
  }
---
Take your `Sqrt` function from the earlier exercise and make it return an `error` when given a negative number.

Create a custom error type:

```go
type ErrNegativeSqrt float64
```

Give it an `Error() string` method so that `ErrNegativeSqrt(-2).Error()` returns `"cannot Sqrt negative number: -2"`.

Then update `Sqrt` to return an `ErrNegativeSqrt` value for negative inputs.

**Watch out:** calling `fmt.Sprint(e)` inside `Error` will cause infinite recursion — `fmt.Sprint` calls `Error`, which calls `fmt.Sprint`, and so on. Convert first: `fmt.Sprint(float64(e))`.
