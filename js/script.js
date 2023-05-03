// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/*
* This function shows how much your loaf order costs
*/
function calculate () {
  // Define variables
  //const TAX = 0.13
  const loafType = document.getElementById('loaf-type').value
  const loafSize = document.getElementById('loaf-size').value

  // output
  document.getElementById('answer').innerHTML = loafType + '' + loafSize
  //document.getElementById('answer2').innerHTML = 
}