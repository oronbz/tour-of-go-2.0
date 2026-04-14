---
title: "Functions"
chapter: 1
lesson: 4
description: "A function can take zero or more arguments."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func add(x int, y int) int {
  	return x + y
  }
  
  func main() {
  	fmt.Println(add(42, 13))
  }
---
A function can take zero or more arguments.

In this example, `add` takes two parameters of type `int`.

Notice that the type comes _after_ the variable name.

(For more about why types look the way they do, see the [article on Go's declaration syntax](/blog/gos-declaration-syntax).)
