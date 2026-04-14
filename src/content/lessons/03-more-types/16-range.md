---
title: "Range"
chapter: 3
lesson: 16
description: "The range form of the for loop iterates over a slice or map."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}
  
  func main() {
  	for i, v := range pow {
  		fmt.Printf("2**%d = %d\n", i, v)
  	}
  }
---
Use **`range`** to iterate over a slice or map without managing indices yourself.

Each iteration gives you two values: the index, and a copy of the element at that index.

**Try it:** Change the slice values and see how the loop output updates.
