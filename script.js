function setActive(selectedItem) {
  document.querySelectorAll(".sidebar-item").forEach((item) => {
    item.classList.remove("bg-activeColor");
  });

  selectedItem.classList.add("bg-activeColor");
}
