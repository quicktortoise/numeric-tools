import { binarySearch, mergeSort } from './algos.js';
import { inputToIntArray } from './common.js';

(function () {
  const txtPoolList = document.getElementById("txt-pool-list");
  const txtSearchList = document.getElementById("txt-search-list");
  const txtResultsList = document.getElementById("txt-results-list");
  const txtNoResultsList = document.getElementById("txt-noresults-list");

  const search = (devicePool, searchTargets) => {
    const found = [];
    const notFound = [];

    for (const target of searchTargets) {
      const searchResult = binarySearch(devicePool, target);
      if (searchResult) {
        found.push(target);
      } else {
        notFound.push(target);
      }
    }

    return { found, notFound };
  }

  // btn-search click listener
  document.getElementById("btn-search").addEventListener("click", () => {
    const devicePool = inputToIntArray(txtPoolList.value);
    const searchTargets = inputToIntArray(txtSearchList.value);

    const findings = search(mergeSort(devicePool), searchTargets);
    const { found, notFound } = findings;

    txtResultsList.value = found.join("\n");
    txtNoResultsList.value = notFound.join("\n");
  });
})();
