---
title: "Pointers to structs"
chapter: 3
lesson: 4
description: "Struct fields can be accessed through a struct pointer."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  type Vertex struct {
  	X int
  	Y int
  }
  
  func main() {
  	v := Vertex{1, 2}
  	p := &v
  	p.X = 1e9
  	fmt.Println(v)
  }
---
You can access struct fields through a **pointer to a struct** — no extra steps needed.

Technically, you'd write `(*p).X` to dereference `p` and then access `X`. But Go lets you drop the parentheses and just write `p.X`. It means the same thing and is much easier to read.

**Try it:** Change the value assigned to `p.X` and watch `v` update — they point to the same data.
