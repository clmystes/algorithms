/**
 * 
 * @param {Array} input 
 * @return {Array}
 */
function insertionSort(input) {
  const len = input.length;
  
  for(let i = 1; i < len; i++) {
    const value = input[i];
    let j = i;

    while(input[j-1] > value && j > 0) {
      input[j] = input[j-1];
      j--;
    }
    input[j] = value;
  }
  return input;
}