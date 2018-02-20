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

  let zeros = [];
  let highestRange = 0;
  let lastRange = 0;
  let finalZeroIndex = 0;

  sequenceArray.forEach((elem, i) => {
    if (elem === '0') {
      zeros.push(i);

      lastRange = (zeros.length > 1)
          ? (zeros[zeros.length-1] - zeros[zeros.length-2])
          : zeros[zeros.length-1];

      if (lastRange > highestRange) {
        highestRange = lastRange;
        finalZeroIndex = zeros[zeros.length-1];
      }
    }

    // Edge case (higher number of 1s at the edge of the array)
    if (i == (sequenceLength-1)) {
      lastRange = sequenceLength - zeros[zeros.length-1];

      if (lastRange > highestRange) {
        highestRange = lastRange;
        finalZeroIndex = zeros[zeros.length-1];
      }
    }
  });

  return `index ${finalZeroIndex}`;
}

module.exports = longest;
