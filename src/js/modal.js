(() => {
  const refs = {
    openModal: document.querySelector('[data-open]'),
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  refs.openModal.addEventListener("click", toggleModal);
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();