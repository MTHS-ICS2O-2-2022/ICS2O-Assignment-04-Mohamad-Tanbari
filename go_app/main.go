// Made by Mohamad
// Made on May 4
//
// This program checks what type of bread you order and how much it costs

package main

import (
	"fmt"
)

func main() {
	// Define variables
	var loafType string
	var loafSize string
	var cost float64
	var TAX float64 = 1.13
	var taxedCost string

	// Ask for bread type
	fmt.Println("What type of bread would you like? \n(w) White bread (m) Multigrain bread \n(s) Sourdough bread (r) Rye bread")
	fmt.Scanln(&loafType)

	// Ask for bread size
	fmt.Println("\nWhat size of bread would you like? \n(l) Large loaf (el) Extra large loaf")
	fmt.Scanln(&loafSize)

	// Calculate cost
	//
	// Check bread type cost
	switch loafType {
	case "w":
		cost = cost + 1
		loafType = "white bread"
	case "m":
		cost = cost + 2
		loafType = "Multigrain bread"
	case "s":
		cost = cost + 3
		loafType = "Sourdough bread"
	case "r":
		cost = cost + 4
		loafType = "Rye bread"
	default:
		fmt.Println("Invalid input")
	}

	// Check bread size cost
	switch loafSize {
	case "l":
		cost = cost + 2
		loafSize = "Large"
	case "el":
		cost = cost + 4
		loafSize = "Extra large"
	default:
		fmt.Println("Invalid input")
	}

	// Get total bread cost
	cost = cost * TAX

	// Round cost
	taxedCost = fmt.Sprintf("%.2f", cost)

	// Tell user cost
	fmt.Println("\nYou ordered a", loafSize, loafType,". It will cost", taxedCost, "dollars.")

	fmt.Println("\nDone.")
}
