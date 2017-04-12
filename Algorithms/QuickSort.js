/**
 * 
 * @param {Array} input 
 * @param {Int} left 
 * @param {Int} right 
 * @return {Array}
 */
function quickSort(input, left = 0, right = input.length-1) {
  const len = input.length;
  
  if(len === 1) { return input; }
  const index = partition(input, left, right);
  if(left < index-1) {
    quickSort(input, left, index-1);
  }
  if(index < right) {
    quickSort(input, index, right);
  }
  return input;
}

/**
 * 
 * @param {Array} array 
 * @param {Int} left 
 * @param {Int} right 
 * @return {Int}
 */
function partition(array, left, right) {
  const pivot = array[Math.floor((left + right) / 2)];
  while(left <= right) {
    while(pivot > array[left]) {
      left++;
    }
    while(pivot < array[right]) {
      right--;
    }
    if(left <= right) {
      swap(array, left, right);
      left++;
      right--;
    }
  }
  return left;
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