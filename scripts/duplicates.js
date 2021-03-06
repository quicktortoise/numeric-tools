(function () {
  const txtDuplicatedList = document.getElementById("txt-duplicated-list"),
    txtFilteredList = document.getElementById("txt-filtered-list");

  // btn-search click listener
  document.getElementById("btn-filter").addEventListener("click", () => {
    const purgedValues = inputToIntArray(txtDuplicatedList.value);
    txtFilteredList.value = arrayAsList(purgedValues);
  });
})();
