(function () {
  const txtPoolList = document.getElementById("txt-pool-list"),
    txtSearchList = document.getElementById("txt-search-list"),
    txtResultsList = document.getElementById("txt-results-list"),
    txtNoResultsList = document.getElementById("txt-noresults-list");

  // btn-search click listener
  document.getElementById("btn-search").addEventListener("click", () => {
    const searchPool = inputToIntArray(txtPoolList.value),
      searchItems = inputToIntArray(txtSearchList.value);

    const findings = search(searchPool, searchItems);

    txtResultsList.value = arrayAsList(findings.found);
    txtNoResultsList.value = arrayAsList(findings.notFound);
  });

  function search(searchPool, searchItems) {
    const findings = {
      found: [],
      notFound: []
    };

    for (const item of searchItems) {
      if (searchPool.includes(item)) {
        findings.found.push(item);
      } else {
        findings.notFound.push(item);
      }
    }

    return findings;
  }
})();
