---
title: "If and else"
chapter: 2
lesson: 7
description: "Variables declared inside an if short statement are also available inside any
of the else blocks."
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
  	} else {
  		fmt.Printf("%g >= %g\n", v, lim)
  	}
  	// can't use v here, though
  	return lim
  }
  
  func main() {
  	fmt.Println(
  		pow(3, 2, 10),
  		pow(3, 3, 20),
  	)
  }
---
A variable declared in an `if` short statement is available in **`else`** blocks too — it lives for the entire `if`/`else` chain.

This is useful for error handling and conditional logic where you want one variable in play without it escaping into the outer scope.

Note that both calls to `pow` return their results before `fmt.Println` in `main` runs.
