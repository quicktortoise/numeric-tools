(function () {
  const clearTextArea = textarea => {
    textarea.value = "";
    textarea.focus();
  }

  // TODO: Use Clipboard API
  const copyTextArea = textarea => {
    textarea.select();
    textarea.focus();
    document.execCommand("copy");
  }

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
})();
