---
title: "For continued"
chapter: 2
lesson: 2
description: "The init and post statements are optional."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  func main() {
  	sum := 1
  	for ; sum < 1000; {
  		sum += sum
  	}
  	fmt.Println(sum)
  }
---
The init and post statements are optional — drop them when you don't need them.

That leaves just the condition, with the semicolons still there as placeholders. It's a bit awkward-looking, which is exactly why Go takes this one step further.
