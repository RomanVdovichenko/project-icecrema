(() => {
  const ref = {
    openShakeBtn: document.querySelector('[data-shake-open]'),
    openChocoBtn: document.querySelector('[data-choco-open]'),
    openCoffeeBtn: document.querySelector('[data-coffee-open]'),
    closeRecipeBtn: document.querySelector('[data-recipe-close]'),
    modalRecipe: document.querySelector('[data-recipe]'),
  };
  ref.openShakeBtn.addEventListener("click", toggleRecipe);
  ref.openCoffeeBtn.addEventListener("click", toggleRecipe);
  ref.openChocoBtn.addEventListener('click', toggleRecipe);
  ref.closeRecipeBtn.addEventListener('click', toggleRecipe);

  function toggleRecipe() {
    ref.modalRecipe.classList.toggle('is-hidden-recipe');
  }
})();