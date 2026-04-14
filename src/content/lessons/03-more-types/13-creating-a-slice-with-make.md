---
title: "Creating a slice with make"
chapter: 3
lesson: 13
description: "Slices can be created with the built-in make function;
this is how you create dynamically-sized arrays."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func main() {
  	a := make([]int, 5)
  	printSlice("a", a)
  
  	b := make([]int, 0, 5)
  	printSlice("b", b)
  
  	c := b[:2]
  	printSlice("c", c)
  
  	d := c[2:5]
  	printSlice("d", d)
  }
  
  func printSlice(s string, x []int) {
  	fmt.Printf("%s len=%d cap=%d %v\n",
  		s, len(x), cap(x), x)
  }
---
The built-in **`make`** function lets you create a slice with a specific length and capacity — this is how most dynamically-sized slices get created.

`make` allocates a zeroed array and returns a slice pointing to it:

```go
a := make([]int, 5)  // len(a)=5
```

Pass a third argument to set the capacity separately from the length:

```go
b := make([]int, 0, 5) // len(b)=0, cap(b)=5
```

```go
b = b[:cap(b)] // len(b)=5, cap(b)=5
b = b[1:]      // len(b)=4, cap(b)=4
```

**Try it:** Experiment with different length/capacity combinations and watch `printSlice` show how they change.
