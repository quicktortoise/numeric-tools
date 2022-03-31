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

const inputToIntArray = inputText => {
  const pattern = /^\s*(\d+)\s*$/gm;
  const intSet = new Set();

  let match = pattern.exec(inputText);
  while (match != null) {
    intSet.add(parseInt(match[1]));

    match = pattern.exec(inputText);
  }

  return [...intSet];
}

const inputToRangeArray = inputText => {
  const pattern = /^\s*\d+(\s*-\s*\d+)?\s*$/gm;
  const exclusionPattern = /[^\d\-]/g;
  const set = new Set();

  let match = pattern.exec(inputText);
  while (match != null) {
    const value = match[0].replace(exclusionPattern, "");
    set.add(value);

    match = pattern.exec(inputText);
  }

  return [...set];
}

export { inputToIntArray, inputToRangeArray };
