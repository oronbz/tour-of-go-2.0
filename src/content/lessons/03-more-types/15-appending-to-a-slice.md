---
title: "Appending to a slice"
chapter: 3
lesson: 15
description: "It is common to append new elements to a slice, and so Go provides a built-in
append function."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func main() {
  	var s []int
  	printSlice(s)
  
  	// append works on nil slices.
  	s = append(s, 0)
  	printSlice(s)
  
  	// The slice grows as needed.
  	s = append(s, 1)
  	printSlice(s)
  
  	// We can add more than one element at a time.
  	s = append(s, 2, 3, 4)
  	printSlice(s)
  }
  
  func printSlice(s []int) {
  	fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
  }
---
To grow a slice, use the built-in **`append`** function:

```go
func append(s []T, vs ...T) []T
```

You pass in a slice and one or more values, and you get back a new slice with those values added at the end.

If the underlying array is too small to fit the new values, Go allocates a bigger one automatically. The returned slice points to the new array.

You can append multiple values at once: `append(s, 2, 3, 4)`.

**Try it:** Start with a nil slice and keep appending. Watch how `len` and `cap` grow.
