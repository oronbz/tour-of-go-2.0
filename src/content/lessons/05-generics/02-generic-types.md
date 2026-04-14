---
title: "Generic types"
chapter: 5
lesson: 2
description: "In addition to generic functions, Go also supports generic types."
isExercise: false
code: |
  package main
  
  // List represents a singly-linked list that holds
  // values of any type.
  type List[T any] struct {
  	next *List[T]
  	val  T
  }
  
  func main() {
  }
---
**Generic types** take the same idea further — not just functions, but entire data structures can be parameterized. A **type parameter** on a struct means one definition covers all the cases.

Here, `List[T any]` is a singly-linked list that holds values of whatever type you choose. `any` is Go's alias for the empty interface — no constraints, any type is welcome.

**Try it:** add methods to this list. A `Push` that prepends a value, or a `String` method that prints all values — both work regardless of whether `T` is `int`, `string`, or anything else.
