/**
 * 
 * @param {Array} input 
 */
function insertionSort(input) {
  const length = input.length;
  let j = null;
  let temp = null;

  for(let i = 1; i < length; i++) {
    j = i;
    temp = input[i];
    while(j > 0 && input[j - 1] > temp) {
      input[j] = input[j -1];
      j--;
    }
    input[j] = temp;
  }
  return input;
}