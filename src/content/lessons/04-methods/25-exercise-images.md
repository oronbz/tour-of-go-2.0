---
title: "Exercise: Images"
chapter: 4
lesson: 25
description: "Remember the picture generator/tour/moretypes/18 you wrote earlier? Let's write another one, but this time it will return an implementation of image.Image inste"
isExercise: true
code: |
  package main
  
  import "golang.org/x/tour/pic"
  
  type Image struct{}
  
  func main() {
  	m := Image{}
  	pic.ShowImage(m)
  }
---
Remember the [picture generator](/tour/moretypes/18) you wrote earlier? Let's write another one, but this time it will return an implementation of `image.Image` instead of a slice of data.

Define your own `Image` type, implement [the necessary methods](/pkg/image/#Image), and call `pic.ShowImage`.

`Bounds` should return a `image.Rectangle`, like `image.Rect(0,`0,`w,`h)`.

`ColorModel` should return `color.RGBAModel`.

`At` should return a color; the value `v` in the last picture generator corresponds to `color.RGBA{v,`v,`255,`255}` in this one.
