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
[Package image](/pkg/image/#Image) defines the `Image` interface:

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

*Note*: the `Rectangle` return value of the `Bounds` method is actually an
[`image.Rectangle`](/pkg/image/#Rectangle), as the
declaration is inside package `image`.

(See [the documentation](/pkg/image/#Image) for all the details.)

The `color.Color` and `color.Model` types are also interfaces, but we'll ignore that by using the predefined implementations `color.RGBA` and `color.RGBAModel`. These interfaces and types are specified by the [image/color package](/pkg/image/color/).
