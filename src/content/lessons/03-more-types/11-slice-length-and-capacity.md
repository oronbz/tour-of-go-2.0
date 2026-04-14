---
title: "Slice length and capacity"
chapter: 3
lesson: 11
description: "A slice has both a length and a capacity."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func main() {
  	s := []int{2, 3, 5, 7, 11, 13}
  	printSlice(s)
  
  	// Slice the slice to give it zero length.
  	s = s[:0]
  	printSlice(s)
  
  	// Extend its length.
  	s = s[:4]
  	printSlice(s)
  
  	// Drop its first two values.
  	s = s[2:]
  	printSlice(s)
  }
  
  func printSlice(s []int) {
  	fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
  }
---
Every slice has two numbers you should know: **length** and **capacity**.

- **Length** (`len(s)`): how many elements the slice currently holds.
- **Capacity** (`cap(s)`): how many elements are available in the underlying array, starting from the slice's first element.

You can grow a slice by re-slicing it — but only up to its capacity. Go beyond that and you'll get a runtime panic.

**Try it:** Modify one of the slice operations in the example to exceed its capacity and observe the error.
