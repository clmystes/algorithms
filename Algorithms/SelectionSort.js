/**
 * 
 * @param {Array} input 
 */
function selectionSort(input) {
  const length = input.length;

  for(let i = 0; i < length - 1; i++) {
    let indexMin = i;
    for(let j = i; j < length; j++) {
      if(input[indexMin] > input[j]) {
        indexMin = j;
      }
    }
    if(indexMin !== i) {
      input[i] = [input[indexMin], input[indexMin] = input[i]][0];
    }
  }
  return input;
}