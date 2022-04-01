const binarySearchR = (array, start, end, target) => {
  if (start > end) return false;

  const mid = Math.floor((end + start) / 2);
  const middle = array[mid];

  if (target === middle) return true;
  if (target < middle) return binarySearchR(array, start, mid - 1, target);

  return binarySearchR(array, mid + 1, end, target);
};

const binarySearch = (array, target) => binarySearchR(array, 0, array.length - 1, target);

const mergeSort = array => {
  if (array.length === 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  return merge(left, right);
};

const merge = (arrayA, arrayB) => {
  const arr = [];
  let indexA = 0;
  let indexB = 0;

  while (indexA < arrayA.length && indexB < arrayB.length) {
    if (arrayA[indexA] === arrayB[indexB]) {
      arr.push(arrayA[indexA++]);
      arr.push(arrayB[indexB++]);
    }
    else if (arrayA[indexA] < arrayB[indexB]) {
      arr.push(arrayA[indexA++]);
    }
    else {
      arr.push(arrayB[indexB++]);
    }
  }

  return arr.concat(
    arrayA.slice(indexA),
    arrayB.slice(indexB)
  );
};

const mergeSortF = (array, selector, comparator) => {
  if (array.length === 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = mergeSortF(array.slice(0, mid), selector, comparator);
  const right = mergeSortF(array.slice(mid), selector, comparator);

  return mergeF(left, right, selector, comparator);
}

const mergeF = (arrayA, arrayB, selector, comparator) => {
  const arr = [];
  let indexA = 0;
  let indexB = 0;

  while (indexA < arrayA.length && indexB < arrayB.length) {
    const selectorA = selector(arrayA[indexA]);
    const selectorB = selector(arrayB[indexB]);
    if (selectorA === selectorB) {
      arr.push(arrayB[indexB++]);
      arr.push(arrayA[indexA++]);
    }
    else if (comparator(selectorA, selectorB)) {
      arr.push(arrayA[indexA++]);
    }
    else {
      arr.push(arrayB[indexB++]);
    }
  }

  return arr.concat(
    arrayA.slice(indexA),
    arrayB.slice(indexB)
  );
}

export { binarySearch, mergeSort, mergeSortF };
