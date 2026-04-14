---
title: "Interfaces are implemented implicitly"
chapter: 4
lesson: 10
description: "A type implements an interface by implementing its methods."
isExercise: false
code: |
  package main
  
  import "fmt"
  
  type I interface {
  	M()
  }
  
  type T struct {
  	S string
  }
  
  // This method means type T implements the interface I,
  // but we don't need to explicitly declare that it does so.
  func (t T) M() {
  	fmt.Println(t.S)
  }
  
  func main() {
  	var i I = T{"hello"}
  	i.M()
  }
---
Go interfaces are **implicit**. There's no `implements` keyword — if your type has the right methods, it satisfies the interface. Full stop.

Here, `T` implements `I` just by having an `M()` method. No declaration needed. No link back to the interface.

This matters. It means you can write an interface in one package and have a type in a completely separate package satisfy it — without either package knowing about the other. That's powerful decoupling.
