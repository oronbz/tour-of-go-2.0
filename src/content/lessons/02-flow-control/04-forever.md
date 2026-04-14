---
title: "Forever"
chapter: 2
lesson: 4
description: "If you omit the loop condition it loops forever, so an infinite loop is compactly expressed."
isExercise: false
code: |
  package main
  
  func main() {
  	for {
  	}
  }
---
Omit the condition entirely and you get an **infinite loop** — it just runs forever.

`for {}` is Go's most compact loop. You'll see this pattern in servers and background workers that are meant to run until something explicitly stops them. Clean and intentional.
