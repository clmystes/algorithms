/**
 * 
 * @param {Array} input 
 */
function bubbleSort(input) {
  const length = input.length;
  for(let i = 0; i < length; i++) {
    for(let j = 0; j < length - 1 - i; j++) {
      if(input[j] > input[j + 1]){
        const aux = input[j];
        input[j] = input[j + 1];
        input[j + 1] = aux;
      }
    }
  }
  return input;
}