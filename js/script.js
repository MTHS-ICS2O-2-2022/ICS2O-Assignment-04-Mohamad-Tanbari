// Copyright (c) 2020 Mohamad Tanbari All rights reserved
//
// Created by: Mohamad Tanbari
// Created on: May 2023
// This file contains the JS functions for index.html

/*
* This function shows how much your loaf order costs
*/
function calculate() {
  // Define variables
  const TAX = 0.13
  let cost = 0

  // input
  const loafType = document.getElementById("bread-type").value
  const loafSize = document.getElementById('loaf-size').value

  // Check if the user entered proper values
  if (loafType == "" || loafSize == "") {
    document.getElementById("answer").innerHTML = "Please input a valid loaf type and size"
    return
  }

  // Calculate price based on bread type
  if (loafType == "White bread") {
    cost = cost + 1
  } else if (loafType == "Multigrain bread") {
    cost = cost + 2
  } else if (loafType == "Sourdough bread") {
    cost = cost + 3
  } else if (loafType == "Rye bread") {
    cost = cost + 4
  }

  // Calculate price based on loaf size
  if (loafSize == "Large") {
    cost = cost + 2
  } else if (loafSize == "Extra Large") {
    cost = cost + 4
  }

  // Tax the cost
  cost = cost + (cost * TAX)

  // Output
    document.getElementById("answer").innerHTML = "You picked the " + loafSize + " " + loafType + " loaf."
    document.getElementById("answer2").innerHTML = "The total cost is $" + cost.toFixed(2) + " (tax included)"
}
