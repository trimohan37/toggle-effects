const button = document.querySelector(".toggle-butt");

let toggle = document.querySelector(".toggle-p");

const hide = function () {
  if (toggle.style.display === "block") {
    toggle.style.display = "none";
  } else {
    toggle.style.display = "block";
  }
};

button.addEventListener("click", hide);
