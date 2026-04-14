---
title: "Map literals continued"
chapter: 3
lesson: 21
description: "If the top-level type is just a type name, you can omit it from the elements of the literal."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  type Vertex struct {
  	Lat, Long float64
  }
  
  var m = map[string]Vertex{
  	"Bell Labs": {40.68433, -74.39967},
  	"Google":    {37.42202, -122.08408},
  }
  
  func main() {
  	fmt.Println(m)
  }
---
When the value type in a map literal is a named type, you can drop the type name from each element. Go can infer it.

Compare the previous example's `Vertex{...}` with this one's `{...}` — same result, less noise.
