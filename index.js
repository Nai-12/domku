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
