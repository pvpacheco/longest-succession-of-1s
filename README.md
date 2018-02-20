# Longest Succession of 1s
Given an array of 0s and 1s, this CLI node script will find the position of 0 to be replaced with 1 to get longest continuous sequence of 1s.

## Enviroment Setup
If you don't have NPM and Node installed, please follow the instructions at:
https://www.npmjs.com/get-npm

## Install
```
$ npm install -g
```

## Tests
Test cases are written in jest at /test.js. To run:
```
$ npm test
```

## Usage
Run the command from your terminal:
```
$ Longest <sequence_of_0_or_1>
```

### Example
```
$ Longest 1,1,0,0,1,0,1,1,1,0,1,1,1
index 9

$ Longest 1,0,1,1,0,1,1,1,1
index 4
```
