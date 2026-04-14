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
Map literals are like struct literals, but the keys are required.
