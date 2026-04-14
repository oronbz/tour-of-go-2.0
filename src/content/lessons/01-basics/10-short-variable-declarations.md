---
title: "Short variable declarations"
chapter: 1
lesson: 10
description: "Inside a function, the := short assignment statement can be used in place of a var declaration with implicit type."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func main() {
  	var i, j int = 1, 2
  	k := 3
  	c, python, java := true, false, "no!"
  
  	fmt.Println(i, j, k, c, python, java)
  }
---
Inside a function, **`:=`** is the shorthand for declaring and initializing a variable — no `var`, no explicit type needed. You'll use this all the time.

Outside a function, every statement must start with a keyword like `var` or `func`, so `:=` isn't available there.
