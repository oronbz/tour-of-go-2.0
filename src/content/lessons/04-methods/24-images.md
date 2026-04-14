---
title: "Images"
chapter: 4
lesson: 24
description: "Package image/pkg/image/Image defines the Image interface:

go
package image


go
type Image interface {
	ColorModel color.Model
	Bounds Rectangle
	Atx, y int c"
isExercise: false
code: |
  package main
  
  import (
  	"fmt"
  	"image"
  )
  
  func main() {
  	m := image.NewRGBA(image.Rect(0, 0, 100, 100))
  	fmt.Println(m.Bounds())
  	fmt.Println(m.At(0, 0).RGBA())
  }
---
The `image` package defines the **`Image` interface**:

```go
package image
```

```go
type Image interface {
	ColorModel() color.Model
	Bounds() Rectangle
	At(x, y int) color.Color
}
```

Implement those three methods on your type and it's a valid `image.Image` — compatible with the entire standard library's imaging toolchain.

Note: `Rectangle` here is `image.Rectangle` (the declaration is inside the `image` package). `color.Color` and `color.Model` are also interfaces, but you can use the concrete `color.RGBA` and `color.RGBAModel` and not worry about that.

**Try it:** this example creates a real `image.RGBA` and prints its bounds and pixel color.
