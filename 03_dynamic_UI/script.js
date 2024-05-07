const menuButton = document.querySelector("#button");
const header = document.querySelector("header");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  // header.classList.toggle('open-menu');
});
