---
title: "For"
chapter: 2
lesson: 1
description: "Go has only one looping construct, the for loop."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func main() {
  	sum := 0
  	for i := 0; i < 10; i++ {
  		sum += i
  	}
  	fmt.Println(sum)
  }
---
Go keeps it simple — there's only **`for`**. No `while`, no `do-while`. Just `for`.

The basic `for` loop has three components, separated by semicolons:

- **init statement**: runs once before the first iteration
- **condition expression**: checked before every iteration
- **post statement**: runs at the end of every iteration

The init statement is usually a short variable declaration. Variables declared there are scoped to the `for` block — they don't leak out.

The loop stops as soon as the condition evaluates to `false`.

One thing to notice: unlike C, Java, or JavaScript, there are no parentheses around the three components. The braces `{}` are always required, though.

**Give it a shot** — run the example and change the condition or step to see what happens.
