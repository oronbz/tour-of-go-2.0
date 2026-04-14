---
title: "Exercise: Equivalent Binary Trees"
chapter: 6
lesson: 8
description: "1."
isExercise: true
code: |
  package main
  
  import "golang.org/x/tour/tree"
  
  // Walk walks the tree t sending all values
  // from the tree to the channel ch.
  func Walk(t *tree.Tree, ch chan int)
  
  // Same determines whether the trees
  // t1 and t2 contain the same values.
  func Same(t1, t2 *tree.Tree) bool
  
  func main() {
  }
---
**Step 1.** Implement the `Walk` function — do an in-order traversal of the tree and send each value to `ch`.

**Step 2.** Test `Walk`. The function `tree.New(k)` builds a randomly structured (but always sorted) binary tree with values `k`, `2k`, `3k`, ..., `10k`. Kick off a walk and read from the channel:

```go
go Walk(tree.New(1), ch)
```

Read 10 values from `ch` — you should get 1, 2, 3, ..., 10 in order.

**Step 3.** Implement `Same` using `Walk`. Walk both trees and compare the sequences value by value. If they match throughout, return `true`.

**Step 4.** Test `Same`.

- `Same(tree.New(1), tree.New(1))` should return `true`
- `Same(tree.New(1), tree.New(2))` should return `false`

The `Tree` type documentation is [here](https://godoc.org/golang.org/x/tour/tree#Tree).
