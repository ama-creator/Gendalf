var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  grabCursor: true,
  // spaceBetween: 26,
  centeredSlides: false,
});

// FAQ
const handleFaq = () => {
  const titles = document.querySelectorAll(".faq-item__title");
  const contents = document.querySelectorAll(".faq-item__info");
  const titleActive = "faq-item__title--active";
  let prevFaqActive;

  titles.forEach((title, ind) => {
    title.addEventListener("click", (event) => {
      const activeContent = contents[ind];

      if (contents[prevFaqActive]?.style.height >= "260px") {
        title.scrollIntoView({ block: "center", behavior: "smooth" });
      }

      if (!title.classList.contains(titleActive)) {
        title.classList.add(titleActive);
        activeContent.style.height = activeContent.scrollHeight + "px";
      }

      if (prevFaqActive >= 0) {
        titles[prevFaqActive].classList.remove(titleActive);
        contents[prevFaqActive].style.height = 0;
      }

      prevFaqActive = prevFaqActive === ind ? undefined : ind;
    });
  });
};
handleFaq();

// Play video
const playVideo = () => {
  const btn = document.querySelector(".info-video__btn");
  const video = document.querySelector(".info-video__item");

  btn.addEventListener("click", () => {
    btn.disabled = "true";
    video.play();
  });
};

playVideo();

// Validate
// validate email
function validateEmail(input) {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const address = input.value;
  if (!reg.test(address) == false) {
    input.parentElement.classList.remove("form-label--error");
    input.parentElement.classList.add("form-label--success");
  } else {
    input.parentElement.classList.add("form-label--error");
    input.parentElement.classList.remove("form-label--success");
  }
}

// validate phone
function validatePhone(input) {
  const phoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const value = input.value;
  if (!phoneNumber.test(value) == false) {
    input.parentElement.classList.remove("form-label--error");
    input.parentElement.classList.add("form-label--success");
  } else {
    input.parentElement.classList.add("form-label--error");
    input.parentElement.classList.remove("form-label--success");
  }
}

const formValidate = () => {
  const form = document.querySelector(".form");
  const [name, phone, email, position] =
    document.querySelectorAll(".form-input");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    validateEmail(email);
    validatePhone(phone);
  });
};

formValidate();

// navigation to
const handleNavLink = (event, link) => {
  event.preventDefault();

  let href = link.getAttribute("href").substring(1);

  const scrollTarget = document.getElementById(href);

  const elementPosition = scrollTarget.getBoundingClientRect().top;

  window.scrollBy({
    top: elementPosition,
    behavior: "smooth",
  });
};

// OPEN / CLOSE MENU
const handleMenuItem = () => {
  const nav = document.querySelector(".header-nav");
  const menu = document.querySelector(".header-nav__menu");
  const menuBtn = document.querySelector(".ham");

  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("ham")) {
      menu.classList.toggle("active");
      nav.classList.toggle("nav--active");
      menuBtn.classList.toggle("active");
    }

    if (event.target.classList.contains("link")) {
      menu.classList.remove("active");
      nav.classList.remove("nav--active");
      menuBtn.classList.remove("active");

      handleNavLink(event, event.target);
    }
  });
};
handleMenuItem();
