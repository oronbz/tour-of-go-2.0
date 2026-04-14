---
title: "Maps"
chapter: 3
lesson: 19
description: "A map maps keys to values."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  type Vertex struct {
  	Lat, Long float64
  }
  
  var m map[string]Vertex
  
  func main() {
  	m = make(map[string]Vertex)
  	m["Bell Labs"] = Vertex{
  		40.68433, -74.39967,
  	}
  	fmt.Println(m["Bell Labs"])
  }
---
**Maps** associate keys with values — like a dictionary or hash table.

The zero value of a map is `nil`. A nil map has no keys and you can't add any. To get a usable map, initialize it with `make`:

```go
m = make(map[string]Vertex)
```

That gives you an empty map, ready to use.

**Try it:** Add a second location to the map and print it.
