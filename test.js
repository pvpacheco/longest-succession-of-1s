const longest = require('./index');

test('Longest function exists', () => {
  expect(longest).toBeDefined();
});

describe('Given an array of 0s and 1s, find the position of 0 to be replaced with 1 to get longest continuous sequence of 1s', () => {
  test('when the sequence is empty', () => {
    const sequence = '';
    expect(longest(sequence)).toEqual('not a valid sequence, please try again');
  });

  test('when the sequence is invalid', () => {
    const sequence = '0,1,X';
    expect(longest(sequence)).toEqual('not a valid sequence, please try again');
  });

  const sequences = [
    ['1,1,0,0,1,0,1,1,1,0,1,1,1'            , '9'],
    ['1,0,1,1,0,1,1,1,1'                    , '4'],
    ['1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1'  , '13'],
  ];

  sequences.forEach(sequence => {
    test(`when the sequence is ${sequence[0]}`, () => {
      expect(longest(sequence[0])).toEqual(`index ${sequence[1]}`);
    });
  });
});
