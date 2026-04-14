---
title: "Slices"
chapter: 3
lesson: 7
description: "An array has a fixed size."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func main() {
  	primes := [6]int{2, 3, 5, 7, 11, 13}
  
  	var s []int = primes[1:4]
  	fmt.Println(s)
  }
---
**Slices** are what you'll actually use day-to-day. Unlike arrays, they're dynamically sized — a flexible window into an underlying array.

The type `[]T` is a slice of `T` values.

Create a slice with a low and high bound separated by a colon:

```go
a[low : high]
```

This is a half-open range: it includes the element at `low`, but excludes `high`. So `a[1:4]` gives you elements at indices 1, 2, and 3.

**Try it:** Change the indices in `primes[1:4]` to see different subsets of the array.
