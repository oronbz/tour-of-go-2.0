---
title: "Exercise: Loops and Functions"
chapter: 2
lesson: 8
description: "As a way to play with functions and loops, let's implement a square root function: given a number x, we want to find the number z for which z² is most nearly x."
isExercise: true
code: |
  package main
  
  import (
  	"fmt"
  )
  
  func Sqrt(x float64) float64 {
  }
  
  func main() {
  	fmt.Println(Sqrt(2))
  }
---
Let's put loops and functions to work: implement a square root function without using `math.Sqrt`. Given a number `x`, find `z` such that `z²` is as close to `x` as possible.

The trick is Newton's method. Start with a guess for `z`, then refine it with:

```go
z -= (z*z - x) / (2*z)
```

Each iteration, the guess gets closer. A starting value of `z = 1` works fine for any input.

**Give it a shot:**

1. Implement `Sqrt` in the provided function. Run the loop 10 times and print `z` on each step.
2. Watch how fast it converges for `x = 2`, `x = 3`, etc.
3. Then change the loop to stop when `z` barely changes between iterations — you'll likely need fewer than 10 steps.

To initialize a float, use either:

```go
z := 1.0
z := float64(1)
```

Compare your final result to `math.Sqrt` — they should match closely.

*For the curious: `z² − x` measures how far off your guess is, and dividing by `2z` (the derivative of `z²`) scales the correction. This is [Newton's method](https://en.wikipedia.org/wiki/Newton%27s_method) — it converges remarkably fast for square roots.*
