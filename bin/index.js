#!/usr/bin/env node

const colors = require('colors');
const convert = require("../lib/convert");

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Please enter the conversion you would like to do. (Ex. 73 cm in m)', unit => {
  let answer = unit.split(' ')
  if (answer.length != 4) {
    console.log('incorrect input')
  } else {
  let amount = answer[0]
  let unit_init = answer[1]
  let unit_new = answer[3]
  console.log(convert.converter(amount, unit_init, unit_new))
}
  readline.close();
});
