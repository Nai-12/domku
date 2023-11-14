window.onscroll = () => {
  const top = document.querySelector("nav");
  const topView = top.offsetTop;
  if (window.pageYOffset > topView) {
    top.classList.add("top-nav");
  } else {
    top.classList.remove("top-nav");
  }
};

const burgerNav = document.querySelector(".bar");
const Nav = document.querySelector("nav ul");
const navBtn = document.querySelector("nav input");

burgerNav.addEventListener("click", function () {
  Nav.classList.add("show");
});

navBtn.onclick = () => {
  Nav.classList.remove("show");
};

let slideImage = 0;
slideShow();

function slideShow() {
  let i;
  let slider = document.getElementsByClassName("slider");
  for (i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
  }
  slideImage++;
  if (slideImage > slider.length) {
    slideImage = 1;
  }
  slider[slideImage - 1].style.display = "block";
  setTimeout(slideShow, 5000);
}
