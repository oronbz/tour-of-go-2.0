---
title: "Slices of slices"
chapter: 3
lesson: 14
description: "Slices can contain any type, including other slices."
isExercise: false
code: |
  package main
  
  import (
  	"fmt"
  	"strings"
  )
  
  func main() {
  	// Create a tic-tac-toe board.
  	board := [][]string{
  		[]string{"_", "_", "_"},
  		[]string{"_", "_", "_"},
  		[]string{"_", "_", "_"},
  	}
  
  	// The players take turns.
  	board[0][0] = "X"
  	board[2][2] = "O"
  	board[1][2] = "X"
  	board[1][0] = "O"
  	board[0][2] = "X"
  
  	for i := 0; i < len(board); i++ {
  		fmt.Printf("%s\n", strings.Join(board[i], " "))
  	}
  }
---
Slices can hold any type — including other slices. That gives you a **2D slice**, which is handy for grids, tables, or boards.

The example builds a tic-tac-toe board as a `[][]string`. Each row is its own slice.

**Try it:** Finish the game — add a few more moves and see what the board looks like.
