---
title: "Interface values with nil underlying values"
chapter: 4
lesson: 12
description: "If the concrete value inside the interface itself is nil,
the method will be called with a nil receiver."
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
  
  func (t *T) M() {
  	if t == nil {
  		fmt.Println("<nil>")
  		return
  	}
  	fmt.Println(t.S)
  }
  
  func main() {
  	var i I
  
  	var t *T
  	i = t
  	describe(i)
  	i.M()
  
  	i = &T{"hello"}
  	describe(i)
  	i.M()
  }
  
  func describe(i I) {
  	fmt.Printf("(%v, %T)\n", i, i)
  }
---
What if the concrete value inside an interface is `nil`? The method still gets called — just with a nil receiver.

In most languages that's a crash waiting to happen. In Go, it's fine as long as your method handles it. See how `M` checks for `nil` and returns early instead of dereferencing a nil pointer.

One important distinction: an interface holding a nil concrete value is **not itself nil**. The interface variable has a type — it just has no value. That's a subtlety worth remembering.
