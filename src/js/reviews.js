const controls = document.querySelector(".marker-list");

controls.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    return;
  }

  const prevActivePane = document.querySelector(".customer-box.is-active");
  if (prevActivePane) {
    prevActivePane.classList.remove("is-active");
  }

  const paneId = e.target.dataset.id;
  const nextActivePane = document.querySelector(`#${paneId}`);
  nextActivePane.classList.add("is-active");
});