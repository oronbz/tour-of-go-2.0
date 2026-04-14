---
title: "Imports"
chapter: 1
lesson: 2
description: "This code groups the imports into a parenthesized, \"factored\" import statement."
isExercise: false
code: |
  package main
  
  import (
  	"fmt"
  	"math"
  )
  
  func main() {
  	fmt.Printf("Now you have %g problems.\n", math.Sqrt(7))
  }
---
This code groups **imports** into a parenthesized, "factored" import statement. You'll see this pattern everywhere in Go code.

You could write separate import statements instead:

```go
import "fmt"
import "math"
```

But the factored style is preferred — it's cleaner and easier to scan.
