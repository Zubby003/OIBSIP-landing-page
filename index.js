const toggleButton = document.querySelector(".toggle-wrapper");
console.log(toggleButton);
toggleButton.onclick = function () {
  const navBar = document.querySelector(".navBar");
  navBar.classList.toggle("active");
};

// toggleButton.addEventListener("click", () => {
//   navBar = document.querySelector("nav");
//   // navBar.classList.toggle("active");
// });
