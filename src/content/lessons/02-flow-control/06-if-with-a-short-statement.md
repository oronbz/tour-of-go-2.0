---
title: "If with a short statement"
chapter: 2
lesson: 6
description: "Like for, the if statement can start with a short statement to execute before the condition."
isExercise: false
code: |
  package main
  
  import (
  	"fmt"
  	"math"
  )
  
  func pow(x, n, lim float64) float64 {
  	if v := math.Pow(x, n); v < lim {
  		return v
  	}
  	return lim
  }
  
  func main() {
  	fmt.Println(
  		pow(3, 2, 10),
  		pow(3, 3, 20),
  	)
  }
---
Like `for`, **`if`** can start with a short statement that runs before the condition is checked. It's a handy pattern for computing a value and immediately branching on it.

Variables declared in that short statement are scoped to the `if` block — they vanish after the closing brace.

**Try it** — attempt to use `v` in the last `return` statement and see the compile error.
