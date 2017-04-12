/**
 * 
 * @param {Array} input 
 * @return {Array}
 */
function mergeSort(input) {
  const len = input.length;

  if(len === 1) { return input; }
  const middle = Math.floor(len / 2);
  const left = input.slice(0, middle);
  const right = input.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

/**
 * 
 * @param {Array} left 
 * @param {Array} right 
 */
function merge(left, right) {
  let result = [];
  let ir = 0;
  let il = 0;

  while(left.length > il && right.length > ir) {
    if(left[il] > right[ir]) {
      result.push(right[ir++]);
    } else {
      result.push(left[il++]);
    }
  }
  return result.concat(right.slice(ir)).concat(left.slice(il));
}
