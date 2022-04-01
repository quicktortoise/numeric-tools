import { mergeSort } from './algos.js';
import { inputToIntArray, inputToRangeArray } from './common.js';

(function () {
  const txtFoldedList = document.getElementById("txt-folded-list");
  const txtUnfoldedList = document.getElementById("txt-unfolded-list");

  const fold = (values, dontContractTwo) => {
    const foldedArray = [];

    for (let i = 0; i < values.length; i++) {
      if (!values[i]) continue;

      const firstNumber = values[i];
      let lastNumber = firstNumber;

      while (i < values.length) {
        const next = values[i + 1];

        if (lastNumber + 1 !== next) {
          break;
        } else {
          if (lastNumber + 1 === next) {
            lastNumber++;
          }

          i++;
        }
      }

      if (firstNumber === lastNumber) {
        foldedArray.push(firstNumber);
      } else {
        if (dontContractTwo && lastNumber - firstNumber === 1) {
          foldedArray.push(firstNumber + "\n" + lastNumber);
        } else {
          foldedArray.push(firstNumber + "-" + lastNumber);
        }
      }
    }

    return foldedArray;
  }

  const unfold = foldedValues => {
    const unfoldedValues = new Set();

    for (let range of foldedValues) {
      for (let item of expandRange(range)) {
        unfoldedValues.add(item);
      }
    }

    return [...unfoldedValues];
  }

  const expandRange = range => {
    const splitRange = range.split("-");

    if (splitRange.length === 1) return [parseInt(splitRange[0])];

    const expandedRange = [];
    const firstNumber = parseInt(splitRange[0]) || 0;
    const lastNumber = parseInt(splitRange[1]) || firstNumber;

    for (let i = firstNumber; i <= lastNumber; i++) {
      expandedRange.push(i);
    }

    return expandedRange;
  }

  // btn-unfold click listener
  document.getElementById("btn-unfold").addEventListener("click", () => {
    const rangeArray = inputToRangeArray(txtFoldedList.value);

    let unfoldedValues = unfold(rangeArray);
    unfoldedValues = mergeSort(unfoldedValues);

    txtUnfoldedList.value = unfoldedValues.join("\n");
  });

  // btn-fold click listener
  document.getElementById("btn-fold").addEventListener("click", () => {
    const dontContractPair = document.getElementById("chk-contract-two-value").checked;

    const valuesToFold = inputToIntArray(txtUnfoldedList.value);
    const ranges = fold(valuesToFold, dontContractPair);

    txtFoldedList.value = ranges.join("\n");
  });
})();
