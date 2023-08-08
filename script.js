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

  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
}
burgerMenu();

// Показати контент зі затримкою та анімацією
gsap.to(".content-body", { opacity: 1, duration: 1 });

// Анімація для body-part-1
gsap.from(".body-part-1", {
  opacity: 0,
  x: -20,
  duration: 1,
  delay: 1,
  onComplete: function () {
    // Коли анімація .body-part-1 завершена, починаємо анімацію тексту
    var titleText = "Front-end Developer: \n Coding Magic";
    var descriptionText =
      "I code beautifully simple things,\nand I love what I do.";

    var titleElement = document.getElementById("title-text");
    var descriptionElement = document.getElementById("description-text");

    function typeText(element, text) {
      var index = 0;

      function addNextCharacter() {
        if (index < text.length) {
          element.innerHTML += text.charAt(index);
          index++;
          setTimeout(addNextCharacter, 50); // Швидкість набору тексту (в мілісекундах)
        }
      }

      addNextCharacter();
    }

    typeText(titleElement, titleText);
    setTimeout(function () {
      typeText(descriptionElement, descriptionText);
    }, 0); // Затримка перед анімацією другого тексту (в мілісекундах)
  },
});

// Анімація для body-part-2
gsap.from(".body-part-2", { opacity: 0, y: 20, duration: 4, delay: 3 });
gsap.from(".telegram__links", { opacity: 0, x: 20, duration: 2, delay: 5 });
gsap.from(".body-tail", { opacity: 0, x: -20, duration: 1, delay: 5 });
gsap.from(".design-card", { opacity: 0, x: -20, duration: 1, delay: 7 });
gsap.from(".introduction-text", { opacity: 0, x: 20, duration: 2, delay: 7 });

gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const texts = gsap.utils.toArray(".anim");
const mask = document.querySelector(".mask");

if (window.innerWidth >= 992) {
  // Анімація для прокручування секцій
  let scrollTween = gsap.to(container, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".swiper-container-top",
      start: "bottom right",
      pin: true,
      scrub: 1,
      end: "+=3000",
    },
  });

  // Анімація верхнього блоку
  gsap.to(".swiper-container-top .swiper-wrapper", {
    xPercent: -100,
    ease: "slow(0.7, 0.7, false)",
    scrollTrigger: {
      trigger: ".swiper-container-top",
      start: "bottom right",
      scrub: true,

      pin: true,
      onEnter: () => scrollTween.kill(),
      onLeaveBack: () => {
        swiperTop.allowSlideNext = true;
        ScrollTrigger.vertical = true;
      },
    },
  });

  // Зупинка вертикальної прокрутки при досягненні останнього слайда
  ScrollTrigger.create({
    trigger: ".swiper-container-top .swiper-slide:last-child",
    start: "top+=100 top",
    end: "bottom+=100 bottom",
    onEnter: () =>
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": () => {
          swiperTop.allowSlideNext = false;
          ScrollTrigger.vertical = false;
        },
      }),
    onLeaveBack: () =>
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": () => {
          swiperTop.allowSlideNext = true;
          ScrollTrigger.vertical = true;
        },
      }),
  });
}

var swiperTop = new Swiper(".swiper-container-top", {
  direction: "horizontal",
  slidesPerView: 1,
  centeredSlides: true,
  speed: 400,
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: ".swiper-pagination", // Додано пагінацію
        clickable: true, // Додано можливість кліку по крапці
      },
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
