window.addEventListener("scroll", function () {
  nav.classList.toggle("fixedNav", window.scrollY > 0);
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [$(".prev"), $(".next")],
  autoplay: true,
  autoplayTimeout: 20000,
  responsiveClass: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

const openNav = document.getElementById("mobNav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const navLink = document.getElementsByClassName("navLink");

const nav = document.querySelector("nav");

openBtn.addEventListener("click", () => {
  openNav.classList.toggle("mobile-open");
});

for (var i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    openNav.classList.toggle("mobile-open");
  });
}
document.addEventListener("touchstart", onTouchStart, { passive: true });
