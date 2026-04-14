---
title: "Nil interface values"
chapter: 4
lesson: 13
description: "A nil interface value holds neither value nor concrete type."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  type I interface {
  	M()
  }
  
  func main() {
  	var i I
  	describe(i)
  	i.M()
  }
  
  func describe(i I) {
  	fmt.Printf("(%v, %T)\n", i, i)
  }
---
A **nil interface value** holds nothing — no concrete value, no concrete type.

Calling a method on it causes a runtime panic. There's no type information to dispatch on, so Go has nowhere to go.

**Try it:** run this code and see the panic. This is different from the previous example — here `i` has no type at all, not even a nil-valued one.
