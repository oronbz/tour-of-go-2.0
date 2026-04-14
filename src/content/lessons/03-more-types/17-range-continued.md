---
title: "Range continued"
chapter: 3
lesson: 17
description: "You can skip the index or value by assigning to ."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func main() {
  	pow := make([]int, 10)
  	for i := range pow {
  		pow[i] = 1 << uint(i) // == 2**i
  	}
  	for _, value := range pow {
  		fmt.Printf("%d\n", value)
  	}
  }
---
Don't need both the index and value? Use `_` to discard whichever one you don't want.

```go
for i, _ := range pow
for _, value := range pow
```

If you only want the index, drop the second variable entirely:

```go
for i := range pow
```

**Try it:** Change the first loop to use `_` for the index and print only the computed values.
