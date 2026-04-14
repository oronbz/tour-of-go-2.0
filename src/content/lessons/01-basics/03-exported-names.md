---
title: "Exported names"
chapter: 1
lesson: 3
description: "In Go, a name is exported if it begins with a capital letter."
isExercise: false
code: |
  package main
  
  import (
  	"fmt"
  	"math"
  )
  
  func main() {
  	fmt.Println(math.pi)
  }
---
In Go, a name is **exported** if it starts with a capital letter. `Pi` is exported from the `math` package. `pi` is not — it stays private to that package.

When you import a package, you can only access its exported names. Anything lowercase is off-limits from outside.

**Try it** — run the code as-is and read the error. Then fix it by changing `math.pi` to `math.Pi`.
