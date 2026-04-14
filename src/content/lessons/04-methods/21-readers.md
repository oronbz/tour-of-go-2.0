---
title: "Readers"
chapter: 4
lesson: 21
description: "The io package specifies the io.Reader interface,
which represents the read end of a stream of data."
isExercise: false
code: |
  package main
  
  import (
  	"fmt"
  	"io"
  	"strings"
  )
  
  func main() {
  	r := strings.NewReader("Hello, Reader!")
  
  	b := make([]byte, 8)
  	for {
  		n, err := r.Read(b)
  		fmt.Printf("n = %v err = %v b = %v\n", n, err, b)
  		fmt.Printf("b[:n] = %q\n", b[:n])
  		if err == io.EOF {
  			break
  		}
  	}
  }
---
The `io` package defines **`io.Reader`** — one of the most important interfaces in Go's standard library.

```go
func (T) Read(b []byte) (n int, err error)
```

`Read` fills a byte slice with data and returns how many bytes it wrote, plus any error. When the stream is done, it returns `io.EOF`.

This one interface powers files, network connections, HTTP bodies, compressors, ciphers, and more. Anything that streams data implements it.

**Try it:** this example reads a string 8 bytes at a time. Watch the output to see how `Read` works through the data chunk by chunk until it hits `io.EOF`.
