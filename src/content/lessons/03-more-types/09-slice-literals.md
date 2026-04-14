---
title: "Slice literals"
chapter: 3
lesson: 9
description: "A slice literal is like an array literal without the length."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func main() {
  	q := []int{2, 3, 5, 7, 11, 13}
  	fmt.Println(q)
  
  	r := []bool{true, false, true, true, false, true}
  	fmt.Println(r)
  
  	s := []struct {
  		i int
  		b bool
  	}{
  		{2, true},
  		{3, false},
  		{5, true},
  		{7, true},
  		{11, false},
  		{13, true},
  	}
  	fmt.Println(s)
  }
---
A **slice literal** is like an array literal — just drop the length.

Array literal:

```go
[3]bool{true, true, false}
```

Slice literal (creates the same array under the hood, then returns a slice pointing to it):

```go
[]bool{true, true, false}
```

You can use any element type, including structs.
