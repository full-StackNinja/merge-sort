// Merge sort using recursive method.
function mergeSort(arr) {
  // Return empty array if already empty
  if (arr.length === 0) return [];

  // Base case for function to converge
  if (arr.length === 1) return arr;
  // If base case not reached then do the following
  const half = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, half);
  const rightHalf = arr.slice(half);
  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

// merge sorted arrays and return them back
function merge(left, right) {
  let mergeArr = [];
  let leftMarker = 0;
  let rightMarker = 0;
  while (leftMarker < left.length && rightMarker < right.length) {
    if (left[leftMarker] < right[rightMarker]) {
      mergeArr.push(left[leftMarker]);
      leftMarker++;
    } else if (left[leftMarker] > right[rightMarker]) {
      mergeArr.push(right[rightMarker]);
      rightMarker++;
    } else {
      mergeArr.push(left[leftMarker], right[rightMarker]);
      leftMarker++;
      rightMarker++;
    }
  }
  // After sorting, concat extra elements at the end
  return mergeArr.concat(left.slice(leftMarker)).concat(right.slice(rightMarker));
}

// Test cases
// const arr = [12, 12, 23, 4, 6, 6, 10, -35, 28];
// const arr = []
const arr = [6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6];

// Call mergeSort funct
console.log(mergeSort(arr));
