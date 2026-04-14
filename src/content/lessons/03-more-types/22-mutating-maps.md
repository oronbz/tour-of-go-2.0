---
title: "Mutating Maps"
chapter: 3
lesson: 22
description: "Insert or update an element in map m:

go
mkey = elem


Retrieve an element:

go
elem = mkey


Delete an element:

go
deletem, key


Test that a key is present "
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func main() {
  	m := make(map[string]int)
  
  	m["Answer"] = 42
  	fmt.Println("The value:", m["Answer"])
  
  	m["Answer"] = 48
  	fmt.Println("The value:", m["Answer"])
  
  	delete(m, "Answer")
  	fmt.Println("The value:", m["Answer"])
  
  	v, ok := m["Answer"]
  	fmt.Println("The value:", v, "Present?", ok)
  }
---
Here's your map toolkit:

Insert or update:
```go
m[key] = elem
```

Retrieve:
```go
elem = m[key]
```

Delete:
```go
delete(m, key)
```

Check if a key exists using the two-value form:
```go
elem, ok = m[key]
```

If `key` is in the map, `ok` is `true`. If not, `ok` is `false` and `elem` is the zero value for that type.

If `elem` and `ok` aren't declared yet, use `:=`:
```go
elem, ok := m[key]
```

**Try it:** Delete the `"Answer"` key and then check whether it's present — watch `ok` go `false`.
