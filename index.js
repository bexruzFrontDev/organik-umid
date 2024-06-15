let sayt = document.querySelector(".sayt");
let sun = document.querySelector(".sun");
sun.onclick = function () {
  sayt.classList.toggle("dark");
  sun.classList.toggle("moon");
};