const toggleBtn = document.getElementById("js-toggleBtn");
const searchBar = document.querySelector(".navBar__search");
const menuBar = document.querySelector(".navBar__menu");

const handleClickTogleBtn = () => {
  searchBar.classList.toggle("active");
  menuBar.classList.toggle("active");
};
toggleBtn.addEventListener("click", handleClickTogleBtn);
