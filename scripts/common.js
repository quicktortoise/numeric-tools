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
