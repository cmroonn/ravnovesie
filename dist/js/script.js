'use strict';

document.addEventListener("DOMContentLoaded", function () {
  {
    var buttons = document.querySelectorAll(".order-call");
    var popup = document.getElementById('call-popup');
    var menu = document.getElementById("menu");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        openPopup("call-popup");
        menu.classList.remove('active');
      });
    });
  }
  {
    var _buttons = document.querySelectorAll(".call-popup");
    var _popup = document.getElementById('form-popup');
    var _menu = document.getElementById("menu");
    _buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        openPopup("form-popup");
        _menu.classList.remove('active');
      });
    });
    document.body.addEventListener('keydown', function (e) {
      if (e.which === 27) {
        closePopup('form-popup');
        closePopup('thank-popup');
      }
    });
    var elems = document.querySelectorAll('.mob-menu__nav a');
    elems.forEach(function (elem) {
      elem.addEventListener("click", function () {
        _menu.classList.remove('active');
      });
    });
  }
  {
    var _buttons2 = document.querySelectorAll(".welcome__burger");
    var _menu2 = document.getElementById("menu");
    _buttons2.forEach(function (btn) {
      btn.addEventListener("click", function () {
        _menu2.classList.toggle("active");
      });
    });
  }
  {
    var _buttons3 = document.querySelectorAll(".info__plate__btn");
    var texts = document.querySelectorAll(".info__plate__text");
    var dots = document.querySelectorAll(".dot");
    _buttons3.forEach(function (btn) {
      btn.addEventListener("click", function () {
        _buttons3.forEach(function (btn) {
          return btn.classList.remove('active');
        });
        texts.forEach(function (text) {
          return text.classList.remove('active');
        });
        dots.forEach(function (dot) {
          return dot.classList.remove('active');
        });
        texts.forEach(function (text) {
          dots.forEach(function (dot) {
            if (btn.dataset.id === text.dataset.id && btn.dataset.id === dot.dataset.id) {
              btn.classList.add('active');
              text.classList.add('active');
              dot.classList.add('active');
            }
          });
        });
      });
    });
    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        _buttons3.forEach(function (btn) {
          return btn.classList.remove('active');
        });
        texts.forEach(function (text) {
          return text.classList.remove('active');
        });
        dots.forEach(function (dot) {
          return dot.classList.remove('active');
        });
        texts.forEach(function (text) {
          _buttons3.forEach(function (btn) {
            if (dot.dataset.id === text.dataset.id && btn.dataset.id === dot.dataset.id) {
              btn.classList.add('active');
              text.classList.add('active');
              dot.classList.add('active');
            }
          });
        });
      });
    });
  }
  {
    var swiper = new Swiper('.swiper', {
      loop: true,
      slidesPerView: "auto",
      slidesPerGroup: 1,
      loopPreventsSliding: false,
      autoHeight: true,
      // Navigation arrows
      navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn'
      },
      breakpoints: {
        500: {
          slidesPerView: 3
        }
      }
    });
  }
  {
    if (window.innerWidth > 992) {
      // Animation settings
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".problems-leaf", {
        scrollTrigger: {
          trigger: ".problems",
          scrub: 3
        },
        top: 100,
        ease: "linear",
        duration: 10
      });
      gsap.to(".problems-leaf2", {
        scrollTrigger: {
          trigger: ".problems__quote",
          scrub: 3
        },
        top: 800,
        ease: "linear",
        duration: 10
      });
      gsap.to(".consequence-leaf", {
        scrollTrigger: {
          trigger: ".info",
          scrub: 3
        },
        top: 1200,
        ease: "linear",
        duration: 10
      });
      gsap.to(".steps-leaf", {
        scrollTrigger: {
          trigger: ".steps",
          scrub: 3
        },
        top: 1200,
        ease: "linear",
        duration: 10
      });
    }
  }
  var overlays = document.querySelectorAll(".overflow");
  console.log(overlays);
  overlays.forEach(function (overlay) {
    overlay.addEventListener("click", function (e) {
      var target = e.target;
      console.log(target);
      console.log(target);
      if (target.closest(".overflow") && target !== overlay) return;
      closePopup(overlay.id);
    });
  });
  function openPopup(id) {
    console.log('ok');
    var popup = document.getElementById(id);
    popup.classList.add("active");
    document.body.style.overflow = 'hidden';
  }
  function closePopup() {
    document.querySelectorAll(".overflow").forEach(function (popup) {
      return popup.classList.remove('active');
    });
    document.body.removeAttribute('style');
  }
});