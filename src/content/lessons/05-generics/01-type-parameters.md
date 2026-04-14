---
title: "Type parameters"
chapter: 5
lesson: 1
description: "Go functions can be written to work on multiple types using type parameters."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  // Index returns the index of x in s, or -1 if not found.
  func Index[T comparable](s []T, x T) int {
  	for i, v := range s {
  		// v and x are type T, which has the comparable
  		// constraint, so we can use == here.
  		if v == x {
  			return i
  		}
  	}
  	return -1
  }
  
  func main() {
  	// Index works on a slice of ints
  	si := []int{10, 20, 15, -10}
  	fmt.Println(Index(si, 15))
  
  	// Index also works on a slice of strings
  	ss := []string{"foo", "bar", "baz"}
  	fmt.Println(Index(ss, "hello"))
  }
---
**Generics** let you write one function that works across many types — no duplicating logic, no empty interfaces. The secret is **type parameters**: extra brackets before a function's arguments that say "this function works for any type `T`."

```go
func Index[T comparable](s []T, x T) int
```

Here, `T` must satisfy the built-in constraint `comparable` — meaning Go can use `==` and `!=` on it. That's how the function compares values without knowing their concrete type ahead of time.

**Try it:** run the example as-is. `Index` works on both `[]int` and `[]string` with no changes. That's the whole point — write once, use everywhere.
