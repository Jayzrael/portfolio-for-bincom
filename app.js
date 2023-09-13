function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
}

const navbar = document.querySelector(".navbar");
const content = document.querySelector(".content");

const scrollThreshold = 100;

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > scrollThreshold) {
    navbar.classList.add("fixed-navbar");
  } else {
    navbar.classList.remove("fixed-navbar");
  }
});

var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
});

function handleSubmit(event) {
  event.preventDefault();
}

$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// function redirectToPSection() {
//   // Replace 'destination-page.html' with the URL of the page you want to link to.
//   window.location.href = "#portfolio-section";
// }
// function redirectToASection() {
//   // Replace 'destination-page.html' with the URL of the page you want to link to.
//   window.location.href = "#about";
// }
