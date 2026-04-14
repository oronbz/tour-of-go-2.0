---
title: "Stringers"
chapter: 4
lesson: 17
description: "One of the most ubiquitous interfaces is Stringer/pkg/fmt/Stringer defined by the fmt/pkg/fmt/ package."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  type Person struct {
  	Name string
  	Age  int
  }
  
  func (p Person) String() string {
  	return fmt.Sprintf("%v (%v years)", p.Name, p.Age)
  }
  
  func main() {
  	a := Person{"Arthur Dent", 42}
  	z := Person{"Zaphod Beeblebrox", 9001}
  	fmt.Println(a, z)
  }
---
One of the most useful interfaces in Go is **`Stringer`**, defined by the `fmt` package:

```go
type Stringer interface {
	String() string
}
```

Any type with a `String() string` method can describe itself as a string. The `fmt` package checks for this interface when printing values.

**Try it:** `Person` implements `Stringer` here. Change the format string in `String()` and watch the output update when you print `a` and `z`.
