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
A common pattern is an [io.Reader](/pkg/io/#Reader) that wraps another `io.Reader`, modifying the stream in some way.

For example, the [gzip.NewReader](/pkg/compress/gzip/#NewReader) function takes an `io.Reader` (a stream of compressed data) and returns a `*gzip.Reader` that also implements `io.Reader` (a stream of the decompressed data).

Implement a `rot13Reader` that implements `io.Reader` and reads from an `io.Reader`, modifying the stream by applying the [rot13](https://en.wikipedia.org/wiki/ROT13) substitution cipher to all alphabetical characters.

The `rot13Reader` type is provided for you.
Make it an `io.Reader` by implementing its `Read` method.
