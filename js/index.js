const priceToggle = document.querySelector("#priceToggle");
const priceMonth = [...document.querySelectorAll(".card__price")];
const priceYear = [...document.querySelectorAll(".card__price-alt")];

priceToggle.addEventListener("click", () => {
  if (priceToggle.checked) {
    hideElements(priceMonth);
    showElements(priceYear);
  } else {
    showElements(priceMonth);
    hideElements(priceYear);
  }
});

function hideElements(array) {
  array.forEach((item) => {
    item.style.display = "none";
  });
}

function showElements(array) {
  array.forEach((item) => {
    item.style.display = "block";
  });
}
