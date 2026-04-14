---
title: "Exercise: Maps"
chapter: 3
lesson: 23
description: "Implement WordCount."
isExercise: true
code: |
  package main
  
  import (
  	"golang.org/x/tour/wc"
  )
  
  func WordCount(s string) map[string]int {
  	return map[string]int{"x": 1}
  }
  
  func main() {
  	wc.Test(WordCount)
  }
---
Implement `WordCount`. It should return a `map[string]int` counting how many times each word appears in `s`.

`wc.Test` will run your function against several test cases and report pass or fail.

Hint: `strings.Fields` splits a string on whitespace — it'll save you some work.
