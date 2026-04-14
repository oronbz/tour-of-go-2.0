---
title: "Exercise: Equivalent Binary Trees"
chapter: 6
lesson: 7
description: "There can be many different binary trees with the same sequence of values stored in it."
isExercise: true
---
Two binary trees can look completely different and still hold the exact same sequence of values. For example, here are two trees both storing 1, 1, 2, 3, 5, 8, 13:

![diagram](/tour/static/img/tree.png)

Checking whether two trees are sequence-equivalent is messy in most languages. In Go, you can use goroutines and channels to walk both trees concurrently and compare their output — elegant and fast.

This exercise uses the `tree` package, which defines:

```go
type Tree struct {
	Left  *Tree
	Value int
	Right *Tree
}
```

Your goal: implement `Walk` and `Same` using channels to determine if two trees hold the same values in the same order.
