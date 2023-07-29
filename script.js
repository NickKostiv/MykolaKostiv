const design_card_butttons = document.querySelectorAll(".design-card");
const introduction_text = document.querySelectorAll(".introduction-text");

const single_profile_card = document.querySelectorAll(".single-profile-card");
const testimonial_card = document.querySelectorAll(".testimonial-card");

design_card_butttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    introduction_text.forEach((introduction, introductionIndex) => {
      if (index === introductionIndex) {
        introduction.style.display = "block";
      } else {
        introduction.style.display = "none";
      }
    });
    design_card_butttons.forEach((btn, btnIndex) => {
      if (index === btnIndex) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  });
});

single_profile_card.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    testimonial_card.forEach((testimonialCard, testimonialCardIndex) => {
      if (index === testimonialCardIndex) {
        testimonialCard.style.display = "block";
      } else {
        testimonialCard.style.display = "none";
      }
    });
    single_profile_card.forEach((cardBtn, cardIndex) => {
      if (index === cardIndex) {
        cardBtn.classList.add("profile-card-active");
      } else {
        cardBtn.classList.remove("profile-card-active");
      }
    });
  });
});

// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active-burger");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
}
burgerMenu();

// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector("nav");

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1;
  if (window.scrollY >= breakpoint) {
    nav.classList.add("fixed__nav");
  } else {
    nav.classList.remove("fixed__nav");
  }
}
window.addEventListener("scroll", fixedNav);
