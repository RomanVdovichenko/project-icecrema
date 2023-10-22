var controls=document.querySelector(".marker-list");controls.addEventListener("click",(function(e){if(e.target!==e.currentTarget){var t=document.querySelector(".customer-box.is-active");t&&t.classList.remove("is-active");var r=e.target.dataset.id;document.querySelector("#".concat(r)).classList.add("is-active")}}));
//# sourceMappingURL=index.1efd87a3.js.map
