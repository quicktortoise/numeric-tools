function binarySearchR(array: number[], start: number, end: number, target: number): boolean {
  if (start > end) return false

  const mid = Math.floor((end + start) / 2)
  const middle = array[mid]

  if (target === middle) return true
  if (target < middle) return binarySearchR(array, start, mid - 1, target)

  return binarySearchR(array, mid + 1, end, target)
}

export function binarySearch(array: number[], target: number): boolean {
  return binarySearchR(array, 0, array.length - 1, target)
}

export function mergeSort(array: number[]): number[] {
  if (array.length <= 1) return array

  const mid = Math.floor(array.length / 2)
  const left = mergeSort(array.slice(0, mid))
  const right = mergeSort(array.slice(mid))

  return merge(left, right)
}

function merge(arrayA: number[], arrayB: number[]): number[] {
  const arr: number[] = []
  let indexA = 0
  let indexB = 0

  while (indexA < arrayA.length && indexB < arrayB.length) {
    if (arrayA[indexA] === arrayB[indexB]) {
      arr.push(arrayA[indexA++])
      arr.push(arrayB[indexB++])
    } else if (arrayA[indexA] < arrayB[indexB]) {
      arr.push(arrayA[indexA++])
    } else {
      arr.push(arrayB[indexB++])
    }
  }

  return arr.concat(arrayA.slice(indexA), arrayB.slice(indexB))
}

export function mergeSortF<T>(
  array: T[],
  selector: (item: T) => number,
  comparator: (a: number, b: number) => boolean,
): T[] {
  if (array.length <= 1) return array

  const mid = Math.floor(array.length / 2)
  const left = mergeSortF(array.slice(0, mid), selector, comparator)
  const right = mergeSortF(array.slice(mid), selector, comparator)

  return mergeF(left, right, selector, comparator)
}

function mergeF<T>(
  arrayA: T[],
  arrayB: T[],
  selector: (item: T) => number,
  comparator: (a: number, b: number) => boolean,
): T[] {
  const arr: T[] = []
  let indexA = 0
  let indexB = 0

  while (indexA < arrayA.length && indexB < arrayB.length) {
    const selectorA = selector(arrayA[indexA])
    const selectorB = selector(arrayB[indexB])
    if (selectorA === selectorB) {
      arr.push(arrayB[indexB++])
      arr.push(arrayA[indexA++])
    } else if (comparator(selectorA, selectorB)) {
      arr.push(arrayA[indexA++])
    } else {
      arr.push(arrayB[indexB++])
    }
  }

  return arr.concat(arrayA.slice(indexA), arrayB.slice(indexB))
}
