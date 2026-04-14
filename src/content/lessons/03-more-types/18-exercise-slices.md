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
Implement `Pic`. It should return a slice of length `dy`, each element of which is a slice of `dx` 8-bit unsigned integers. When you run the program, it will display your picture, interpreting the integers as grayscale (well, bluescale) values.

The choice of image is up to you. Interesting functions include `(x+y)/2`, `x*y`, and `x^y`.

(You need to use a loop to allocate each `[]uint8` inside the `[][]uint8`.)

(Use `uint8(intValue)` to convert between types.)
