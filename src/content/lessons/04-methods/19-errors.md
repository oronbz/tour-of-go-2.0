---
title: "Errors"
chapter: 4
lesson: 19
description: "Go programs express error state with error values."
isExercise: false
code: |
  package main
  
  import (
  	"fmt"
  	"time"
  )
  
  type MyError struct {
  	When time.Time
  	What string
  }
  
  func (e *MyError) Error() string {
  	return fmt.Sprintf("at %v, %s",
  		e.When, e.What)
  }
  
  func run() error {
  	return &MyError{
  		time.Now(),
  		"it didn't work",
  	}
  }
  
  func main() {
  	if err := run(); err != nil {
  		fmt.Println(err)
  	}
  }
---
Go handles errors with values, not exceptions. The built-in **`error`** interface looks like this:

```go
type error interface {
	Error() string
}
```

Any type with an `Error() string` method satisfies it — the same implicit satisfaction you've seen throughout this chapter.

Functions typically return an `error` as their last value. Callers check it:

```go
i, err := strconv.Atoi("42")
if err != nil {
	fmt.Printf("couldn't convert number: %v\n", err)
	return
}
fmt.Println("Converted integer:", i)
```

`nil` means success. Non-nil means something went wrong.
