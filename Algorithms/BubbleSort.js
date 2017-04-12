/**
 * 
 * @param {Array} input 
 * @return {Array}
 */
function bubbleSort(input) {
  const length = input.length;

  for(let i = 0; i < length-1; i++) {
    for(let j = 0; j < length-1-i; j++) {
      if(input[j] > input[j + 1]){
        swap(input, j, j+1);
      }
    }
  }
  return input;
}

/**
 * 
 * @param {Array} array 
 * @param {Int} p1 
 * @param {Int} p2 
 * @return {Array} 
 */
function swap(array, p1, p2) {
  const aux = array[p1];
  array[p1] = array[p2];
  array[p2] = aux;
  return array;
}