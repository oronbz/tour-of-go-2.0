---
title: "Switch with no condition"
chapter: 2
lesson: 11
description: "Switch without a condition is the same as switchtrue."
isExercise: false
code: |
  package main
  
  import (
  	"fmt"
  	"time"
  )
  
  func main() {
  	t := time.Now()
  	switch {
  	case t.Hour() < 12:
  		fmt.Println("Good morning!")
  	case t.Hour() < 17:
  		fmt.Println("Good afternoon.")
  	default:
  		fmt.Println("Good evening.")
  	}
  }
---
A **switch with no condition** is the same as `switch true` — each case is a boolean expression, and the first one that's true wins.

This is a great pattern for replacing long `if`-`else` chains. It reads clearly top to bottom, and Go's automatic `break` keeps it tidy. You'll reach for this more than you'd expect.
