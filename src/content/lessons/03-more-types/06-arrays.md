---
title: "Arrays"
chapter: 3
lesson: 6
description: "The type nT is an array of n values of type T."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func main() {
  	var a [2]string
  	a[0] = "Hello"
  	a[1] = "World"
  	fmt.Println(a[0], a[1])
  	fmt.Println(a)
  
  	primes := [6]int{2, 3, 5, 7, 11, 13}
  	fmt.Println(primes)
  }
---
**Arrays** in Go have a fixed size baked into their type. The type `[n]T` is an array of exactly `n` values of type `T`.

```go
var a [10]int
```

That declares `a` as ten integers. You can't resize it — the length is part of the type.

That sounds limiting, and it is. In practice, you'll reach for slices almost every time. Arrays are mostly the foundation that slices are built on.
