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
  const sequenceArray = sequence.trim().split(',');
  const sequenceLength = sequenceArray.length;

  let zeroIndexes = [];
  let highestDiff = 0;
  let lastDiff = 0;
  let maxIndex = 0;

  sequenceArray.forEach((elem, i) => {
    if (elem === '0') {
      zeroIndexes.push(i);

      lastDiff = (zeroIndexes.length > 1)
          ? (zeroIndexes[zeroIndexes.length-1] - zeroIndexes[zeroIndexes.length-2])
          : zeroIndexes[zeroIndexes.length-1];

      if (lastDiff > highestDiff) {
        highestDiff = lastDiff;
        maxIndex = zeroIndexes[zeroIndexes.length-1];
      }
    }

    // Edge case (higher number of 1s at the edge of the sequence)
    if (i == (sequenceLength-1)) {
      lastDiff = sequenceLength - zeroIndexes[zeroIndexes.length-1];

      if (lastDiff > highestDiff) {
        highestDiff = lastDiff;
        maxIndex = zeroIndexes[zeroIndexes.length-1];
      }
    }
  });

  return `index ${maxIndex}`;
}

module.exports = longest;
