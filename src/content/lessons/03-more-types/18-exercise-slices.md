---
title: "Exercise: Slices"
chapter: 3
lesson: 18
description: "Implement Pic."
isExercise: true
code: |
  package main
  
  import "golang.org/x/tour/pic"
  
  func Pic(dx, dy int) [][]uint8 {
  }
  
  func main() {
  	pic.Show(Pic)
  }
---
Implement `Pic`. It should return a `[][]uint8` of size `dy` x `dx`. The program will render your values as a bluescale image.

You choose the math. Try `(x+y)/2`, `x*y`, or `x^y` and see what patterns emerge.

A few hints:
- You'll need a loop to allocate each inner `[]uint8`.
- Use `uint8(intValue)` to convert your computed values to the right type.
