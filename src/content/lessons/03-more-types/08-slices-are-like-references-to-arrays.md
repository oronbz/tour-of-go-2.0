---
title: "Slices are like references to arrays"
chapter: 3
lesson: 8
description: "A slice does not store any data,
it just describes a section of an underlying array."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func main() {
  	names := [4]string{
  		"John",
  		"Paul",
  		"George",
  		"Ringo",
  	}
  	fmt.Println(names)
  
  	a := names[0:2]
  	b := names[1:3]
  	fmt.Println(a, b)
  
  	b[0] = "XXX"
  	fmt.Println(a, b)
  	fmt.Println(names)
  }
---
A slice doesn't own its data — it's just a **view into an underlying array**. No copying happens when you slice.

Because of that, if you change an element through a slice, you're changing the array. And if another slice points to the same part of that array, it sees the change too.

**Try it:** Notice how modifying `b[0]` also changes what `a` sees, because both slices overlap on the same underlying array.
