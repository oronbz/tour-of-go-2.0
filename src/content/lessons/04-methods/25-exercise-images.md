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
Remember the picture generator from before? Time to revisit it — but this time, return an `image.Image` instead of a raw slice.

Define your own `Image` type and implement the three methods the `image.Image` interface requires:

- `Bounds` should return `image.Rect(0, 0, w, h)`
- `ColorModel` should return `color.RGBAModel`
- `At` should return a color — use `color.RGBA{v, v, 255, 255}` where `v` is whatever pixel formula you like

Then call `pic.ShowImage` with your type and see the result.
