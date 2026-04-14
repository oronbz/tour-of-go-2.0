---
title: "Map literals"
chapter: 3
lesson: 20
description: "Map literals are like struct literals, but the keys are required."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  type Vertex struct {
  	Lat, Long float64
  }
  
  var m = map[string]Vertex{
  	"Bell Labs": Vertex{
  		40.68433, -74.39967,
  	},
  	"Google": Vertex{
  		37.42202, -122.08408,
  	},
  }
  
  func main() {
  	fmt.Println(m)
  }
---
**Map literals** let you declare and populate a map in one shot. The syntax looks like struct literals, but keys are required — no skipping them.

**Try it:** Add a third entry to the map and verify it prints correctly.
