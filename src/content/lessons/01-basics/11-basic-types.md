---
title: "Basic types"
chapter: 1
lesson: 11
description: "Go's basic types are

go
bool


go
string


go
int  int8  int16  int32  int64
uint uint8 uint16 uint32 uint64 uintptr


go
byte // alias for uint8


go
rune // "
isExercise: false
code: |
  package main
  
  import (
  	"fmt"
  	"math/cmplx"
  )
  
  var (
  	ToBe   bool       = false
  	MaxInt uint64     = 1<<64 - 1
  	z      complex128 = cmplx.Sqrt(-5 + 12i)
  )
  
  func main() {
  	fmt.Printf("Type: %T Value: %v\n", ToBe, ToBe)
  	fmt.Printf("Type: %T Value: %v\n", MaxInt, MaxInt)
  	fmt.Printf("Type: %T Value: %v\n", z, z)
  }
---
Go's **basic types** are:

```go
bool
```

```go
string
```

```go
int  int8  int16  int32  int64
uint uint8 uint16 uint32 uint64 uintptr
```

```go
byte // alias for uint8
```

```go
rune // alias for int32
   // represents a Unicode code point
```

```go
float32 float64
```

```go
complex64 complex128
```

Like imports, variable declarations can be grouped into a factored block — handy for package-level vars.

Reach for `int` by default for integers. It's 32 or 64 bits depending on your platform, and it's what most Go code uses. Only go for a sized or unsigned type when you have a specific reason.
