#!/usr/bin/env node
'use strict';

// Process CLI arguments using Commander
const program = require('commander');

program
  .version('0.0.1')
  .arguments('<sequence_of_0_or_1>')
  .description('Finds the position of 0 to be replaced with 1 to get longest continuous sequence of 1s.')
  .action(function(args){
    console.log(longest(args));
  });

program.parse(process.argv);

function longest(sequence) {
  // Input validations before execution
  const regEx = /(^[0,1]{1}(\,{1}[0,1]{1})+$|^[0,1]{1}$)/;

  if (typeof(sequence) !== "string"
    || !regEx.test(sequence.trim())
    || sequence.trim() === ''
  ) return 'not a valid sequence, please try again';

  // Main algoritm
  const SEQUENCE_ARRAY = sequence.trim().split(',');
  const SEQUENCE_LEN = SEQUENCE_ARRAY.length;
  let maxDiff = 0;
  let maxIndex = 0;
  let lastDiff = 0;
  let lastIndex = -1;

  // Traversing sequence
  SEQUENCE_ARRAY.forEach((elem, i) => {

    // If found a zero, calculates de difference between this and the last one;
    if (elem === '0') {
      lastDiff = i - lastIndex;
      lastIndex = i;

      // Is the current diference higher than the last one? If so, store this zero-index
      if (lastDiff > maxDiff) {
        maxDiff = lastDiff;
        maxIndex = lastIndex;
      }
    }

    // Edge case (higher number of 1s at the edge of the sequence)
    if (i == (SEQUENCE_LEN-1)) {
      lastDiff = SEQUENCE_LEN - lastIndex;

      if (lastDiff > maxDiff) {
        maxDiff = lastDiff;
        maxIndex = lastIndex;
      }
    }
  });

  return `index ${maxIndex}`;
}

module.exports = longest;
