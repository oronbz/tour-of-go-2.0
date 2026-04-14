---
title: "Packages"
chapter: 1
lesson: 1
description: "Every Go program is made up of packages."
isExercise: false
code: |
  package main
  
  import (
  	"fmt"
  	"math/rand"
  )
  
  func main() {
  	fmt.Println("My favorite number is", rand.Intn(10))
  }
---
Every Go program is built from **packages**. Your program always starts in `package main` — that's the entry point.

This program uses the packages `"fmt"` and `"math/rand"`. By convention, the package name matches the last element of the import path. So `"math/rand"` contains files that start with `package rand`.

**Give it a shot** — run the code and see what number comes out.
