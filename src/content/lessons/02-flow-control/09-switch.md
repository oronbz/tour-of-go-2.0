---
title: "Switch"
chapter: 2
lesson: 9
description: "A switch statement is a shorter way to write a sequence of if-else statements."
isExercise: false
code: |
  package main
  
  import (
  	"fmt"
  	"runtime"
  )
  
  func main() {
  	fmt.Print("Go runs on ")
  	switch os := runtime.GOOS; os {
  	case "darwin":
  		fmt.Println("macOS.")
  	case "linux":
  		fmt.Println("Linux.")
  	default:
  		// freebsd, openbsd,
  		// plan9, windows...
  		fmt.Printf("%s.\n", os)
  	}
  }
---
A **`switch`** statement is a cleaner alternative to a long chain of `if`-`else` blocks. It runs the first case that matches — and only that case.

Here's the big difference from C, Java, or JavaScript: Go does **not** fall through by default. No need to write `break` at the end of every case — Go adds it automatically.

Two more things worth knowing: switch cases don't have to be constants, and the values don't have to be integers. Go is more flexible here than most languages.
