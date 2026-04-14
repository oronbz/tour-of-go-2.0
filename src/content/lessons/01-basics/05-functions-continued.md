---
title: "Functions continued"
chapter: 1
lesson: 5
description: "When two or more consecutive named function parameters share a type, you can omit the type from all but the last."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func add(x, y int) int {
  	return x + y
  }
  
  func main() {
  	fmt.Println(add(42, 13))
  }
---
When two or more consecutive named function parameters share a type, you can omit the type from all but the last.

In this example, we shortened

```go
x int, y int
```

to

```go
x, y int
```
