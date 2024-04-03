let input = process.argv[2];

if (input)
  console.log(reverse(input));

// eslint-disable-next-line func-style
function reverse(original) {
  return original.split('').reverse().join('');
}