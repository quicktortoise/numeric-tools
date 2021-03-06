(function () {
  const txtFoldedList = document.getElementById("txt-folded-list"),
    txtUnfoldedList = document.getElementById("txt-unfolded-list");

  // btn-unfold click listener
  document.getElementById("btn-unfold").addEventListener("click", () => {
    const input = inputToRangeArray(txtFoldedList.value);

    let unfoldedValues = unfold(input);
    unfoldedValues = removeDuplicates(unfoldedValues.sort((a, b) => a - b));

    txtUnfoldedList.value = arrayAsList(unfoldedValues);
  });

  // btn-fold click listener
  document.getElementById("btn-fold").addEventListener("click", () => {
    const dontContractPair = document.getElementById("chk-contract-two-value").checked;

    const valuesToFold = inputToIntArray(txtUnfoldedList.value);
    const foldedArray = fold(valuesToFold, dontContractPair);

    txtFoldedList.value = arrayAsList(foldedArray);
  });

  function fold(values, dontContractTwo) {
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

  function unfold(foldedValues) {
    const unfoldedValues = [];

    for (let fold of foldedValues) {
      if (fold) {
        for (let range of expandRange(fold)) {
          unfoldedValues.push(range);
        }
      }
    }

    return unfoldedValues;
  }

  function expandRange(range) {
    const splitRange = range.split("-"),
      expandedRange = [];

    if (splitRange.length === 2) {
      const firstNumber = parseInt(splitRange[0]) || 0;
      const lastNumber = parseInt(splitRange[1]) || firstNumber;

      for (let i = firstNumber; i <= lastNumber; i++) {
        expandedRange.push(i);
      }
    } else if (splitRange.length === 1 && splitRange[0]) {
      return splitRange;
    }

    return expandedRange;
  }
})();
