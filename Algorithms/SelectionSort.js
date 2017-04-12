/**
 * 
 * @param {Array} input 
 * @return {Array}
 */
function selectionSort(input) {
  const len = input.length;

  for(let i = 0; i < len; i++) {
    let min = i;
    for(let j = i+1; j < len; j++) {
      if(input[j] < input[min]) {
        min = j;
      }
    }
    if(min !== i) {
      swap(input, i, min);
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