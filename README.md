![npm (scoped)](https://img.shields.io/npm/v/@akp-13/greetings)

# Measurement Unit Converter

Convert any number and unit to a different unit.

Users can

-   Input a number with an initial unit and a desired unit.
    -   ex. 23 cm in m
-   Program will implement the desired unit conversion.
    -   ex. 0.23m

## Installation & Usage

- Fork and clone the repo
- move into unitConverter folder
- run npm install
- run node ./bin/index.js to test functionality locally
- run npm install -g ./
- run unitConvert to test global functionality

## Supported Units

More coming soon!

|  Unit  | ISO-Code |
| :--------: | :------: |
|   Meter    |     m    |
| Centimetre |    cm    |

## Add new more UNITS

- add unit to UNITS object in /lib/convert.js
- in the form {unit: conversion from metres}

### Aknowledgements

-   [Uday Hiwarale's](https://medium.com/@thatisuday) article [Creating CLI Executable global npm module](https://medium.com/jspoint/creating-cli-executable-global-npm-module-5ef734febe32).
