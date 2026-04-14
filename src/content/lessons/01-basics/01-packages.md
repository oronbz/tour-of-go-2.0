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

Every Go program is made up of packages. Programs start running in package `main`.

This program uses packages with import paths `"fmt"` and `"math/rand"`.

By convention, the package name matches the last element of the import path — so `"math/rand"` starts with `package rand`.

**Give it a shot** — hit Run in the playground and see what number you get. Run it again — notice it changes.
