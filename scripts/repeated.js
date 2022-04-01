import { mergeSortF } from './algos.js';

(function () {
  const txtDuplicatedList = document.getElementById("txt-duplicates-list");
  const txtFilteredList = document.getElementById("txt-filtered-list");
  const txtResultsList = document.getElementById("txt-results-list");

  // btn-search click listener
  document.getElementById("btn-filter").addEventListener("click", () => {
    const lines = txtDuplicatedList.value
      .split("\n")
      .map(x => x.trim());

    const result = analyzeLines(lines);

    txtFilteredList.value = result.map(x => x.key)
      .join("\n");

    txtResultsList.value = result.map(x =>
      `${x.key}: ${x.count} ${x.count > 1 ? "repeticiones" : "repetición"}`)
      .join("\n");
  });

  const analyzeLines = lines => {
    const dictionary = [];

    for (const line of lines) {
      if (line.length === 0) continue;
      const item = dictionary.find(x => x.key === line);

      if (item) {
        ++item.count;
      } else {
        dictionary.push({
          key: line,
          count: 1
        });
      }
    }

    // Sort array by count, greater to lower
    return mergeSortF(
      dictionary,
      x => x.count,
      (a, b) => a > b);
  }
})();
