---
title: "Pointers"
chapter: 3
lesson: 1
description: "Go has pointers."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func main() {
  	i, j := 42, 2701
  
  	p := &i         // point to i
  	fmt.Println(*p) // read i through the pointer
  	*p = 21         // set i through the pointer
  	fmt.Println(i)  // see the new value of i
  
  	p = &j         // point to j
  	*p = *p / 37   // divide j through the pointer
  	fmt.Println(j) // see the new value of j
  }
---
**Pointers** hold memory addresses. Instead of copying a value, you point to where it lives.

The type `*T` is a pointer to a `T` value. Its zero value is `nil`.

```go
var p *int
```

Use `&` to get a pointer to a variable:

```go
i := 42
p = &i
```

Use `*` to read or write through that pointer — this is called **dereferencing**:

```go
fmt.Println(*p) // read i through the pointer p
*p = 21         // set i through the pointer p
```

One thing Go doesn't have: pointer arithmetic. No `p++` tricks like in C.
