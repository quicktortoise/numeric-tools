(function () {
  // Copiar textarea
  document.getElementsByName("btn-copy").forEach(item => {
    item.addEventListener("click", () => {
      const id = item.getAttribute("data-control-id"),
        textarea = document.getElementById(id);
      copyTextArea(textarea);
    });
  });

// Limpiar textarea
  document.getElementsByName("btn-clear").forEach(item => {
    item.addEventListener("click", () => {
      const id = item.getAttribute("data-control-id"),
        textarea = document.getElementById(id);
      clearTextArea(textarea);
    });
  });

  function clearTextArea(textarea) {
    textarea.value = "";
    textarea.focus();
  }

  function copyTextArea(textarea) {
    textarea.select();
    textarea.focus();
    document.execCommand("copy");
  }
})();


/*
 * Funciones de utilería
 */

function inputToIntArray(inputText) {
  const inputArray = inputText.split("\n"),
    pattern = /^\s*\d+\s*$/,
    array = [];

  for (let item of inputArray) {
    if (pattern.test(item)) {
      const int = parseInt(item);

      if (!array.includes(int)) {
        array.push(int);
      }
    }
  }

  return array.sort((a, b) => a - b);
}

function inputToRangeArray(inputText) {
  const inputArray = inputText.split("\n"),
    pattern = /^\s*\d+(\s*-\s*\d+)?\s*$/,
    exclusionPattern = /[^\d\-]/g,
    array = [];

  for (let item of inputArray) {
    if (pattern.test(item)) {
      const value = item.replace(exclusionPattern, "");

      if (!array.includes(value)) {
        array.push(value);
      }
    }
  }

  return array;
}

function arrayAsList(array) {
  let stringList = "";

  for (const item of array) {
    stringList += item + "\n";
  }

  return stringList;
}

function removeDuplicates(array) {
  const purgedArray = [];

  for (let item of array) {
    if (item) {
      if (!purgedArray.includes(item)) {
        purgedArray.push(item);
      }
    }
  }

  return purgedArray;
}
