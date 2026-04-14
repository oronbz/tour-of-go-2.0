---
title: "Exercise: rot13Reader"
chapter: 4
lesson: 23
description: "A common pattern is an io.Reader/pkg/io/Reader that wraps another io.Reader, modifying the stream in some way."
isExercise: true
code: |
  package main
  
  import (
  	"io"
  	"os"
  	"strings"
  )
  
  type rot13Reader struct {
  	r io.Reader
  }
  
  func main() {
  	s := strings.NewReader("Lbh penpxrq gur pbqr!")
  	r := rot13Reader{s}
  	io.Copy(os.Stdout, &r)
  }
---
A powerful pattern: an `io.Reader` that wraps another `io.Reader` and transforms the data as it flows through.

`gzip.NewReader` works this way — it takes a compressed stream and returns a decompressed one. Same interface, transformed data.

Your job: implement `rot13Reader`. It wraps an `io.Reader` and applies the [ROT13](https://en.wikipedia.org/wiki/ROT13) cipher to every alphabetical byte it reads.

The struct is already defined. Add a `Read` method that reads from `r.r` and shifts each letter by 13 positions.
