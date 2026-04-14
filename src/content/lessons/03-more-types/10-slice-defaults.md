---
title: "Slice defaults"
chapter: 3
lesson: 10
description: "When slicing, you may omit the high or low bounds to use their defaults instead."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func main() {
  	s := []int{2, 3, 5, 7, 11, 13}
  
  	s = s[1:4]
  	fmt.Println(s)
  
  	s = s[:2]
  	fmt.Println(s)
  
  	s = s[1:]
  	fmt.Println(s)
  }
---
When slicing, you can omit either bound and Go fills in the **default**: `0` for the low end, and the slice's length for the high end.

So for a 10-element array, all four of these mean the same thing:

```go
a[0:10]
a[:10]
a[0:]
a[:]
```

**Try it:** Rewrite the slice operations in the example using different combinations of defaults.
