document.addEventListener("DOMContentLoaded", function() {
  /* Прелоадер: скрываем после загрузки страницы */
  window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    preloader.style.transition = "opacity 0.5s ease-out";
    preloader.style.opacity = "0";
    setTimeout(function() {
      preloader.style.display = "none";
    }, 500);
  });

  /* Переключение темы */
  const toggleThemeBtn = document.getElementById("toggleTheme");
  if (toggleThemeBtn) {
    toggleThemeBtn.addEventListener("click", function() {
      document.body.classList.toggle("dark");
    });
  }

  /* Плавная прокрутка для якорных ссылок в навигационном меню */
  document.querySelectorAll("nav ul li a").forEach(link => {
    const href = link.getAttribute("href");
    if (href.startsWith("#")) {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
    // Для ссылок не начинающихся с # (например, love.html) стандартное поведение сохраняется
  });

  /* Параллакс-эффект для hero-контента и отображение кнопки "Вверх" */
  window.addEventListener("scroll", function() {
    const heroContent = document.querySelector(".hero-content");
    if (heroContent) {
      let scrolled = window.pageYOffset;
      heroContent.style.transform = "translateY(" + (scrolled * 0.5) + "px)";
    }
    //Отображение кнопки возврата наверх
    const scrollToTopBtn = document.getElementById("scrollToTop");
    if (scrollToTopBtn) {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add("active");
      } else {
        scrollToTopBtn.classList.remove("active");
      }
    }
  });

  /* Кнопка возврата наверх */
  const scrollToTopBtn = document.getElementById("scrollToTop");
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* Кнопка прокрутки вниз (из hero) */
  const scrollDownBtn = document.getElementById("scrollDown");
  if (scrollDownBtn) {
    scrollDownBtn.addEventListener("click", function() {
      const calculatorEl = document.getElementById("calculator");
      if (calculatorEl) {
        calculatorEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  /* Анимация частиц на canvas */
  const canvas = document.getElementById("particle-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const particleCount = 100;

    function Particle(x, y, dx, dy, size, color) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.size = size;
      this.color = color;
    }
    Particle.prototype.draw = function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    };
    Particle.prototype.update = function() {
      if (this.x + this.size > canvas.width || this.x - this.size < 0) {
        this.dx = -this.dx;
      }
      if (this.y + this.size > canvas.height || this.y - this.size < 0) {
        this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;
      this.draw();
    };

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        let size = Math.random() * 3 + 1;
        let x = Math.random() * (canvas.width - size * 2) + size;
        let y = Math.random() * (canvas.height - size * 2) + size;
        let dx = (Math.random() - 0.5) * 2;
        let dy = (Math.random() - 0.5) * 2;
        let color = "rgba(255,255,255,0.8)";
        particles.push(new Particle(x, y, dx, dy, size, color));
      }
    }

    function animateParticles() {
      requestAnimationFrame(animateParticles);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => particle.update());
    }

    initParticles();
    animateParticles();

    window.addEventListener("resize", function() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    });
  }

  /* IntersectionObserver для плавного появления элементов */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".feature-card, .service-card, .gallery-item").forEach(item => {
    observer.observe(item);
  });

  /* Модальное окно: открытие по клику на карточку */
  const modal = document.getElementById("modal");
  const closeModalBtn = document.querySelector(".close-button");
  document.querySelectorAll(".feature-card, .service-card").forEach(card => {
    card.addEventListener("click", function() {
      modal.style.display = "block";
    });
  });
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
  }
  window.addEventListener("click", function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  /* Слайдер отзывов */
  const testimonials = document.querySelectorAll(".testimonial");
  let currentTestimonial = 0;
  setInterval(function() {
    testimonials[currentTestimonial].classList.remove("active");
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].classList.add("active");
  }, 5000);

  /* Логика калькулятора */
  const form = document.querySelector("form");
  if (form) {
    function averageInputValues(fieldset) {
      let totalValue = 0;
      let count = 0;
      const inputs = fieldset.querySelectorAll("input");
      for (let input of inputs) {
        if (!input.validity.valid || input.value === "") {
          return;
        }
        totalValue += Number(input.value);
        count += 1;
      }
      return totalValue / count;
    }

    function setOutputValues() {
      const max = form.querySelector("input").max;
      let totalWeightedAverage = 0;
      let totalWeight = 0;
      const fieldsets = form.querySelectorAll("fieldset");
      for (let fieldset of fieldsets) {
        const average = averageInputValues(fieldset);
        const fieldsetOutput = fieldset.querySelector("output");
        if (average === undefined) {
          fieldsetOutput.value = "Enter grade between 0 and " + max;
        } else if (isNaN(average)) {
          fieldsetOutput.value = "Please enter a grade.";
        } else {
          fieldsetOutput.value = "avg: " + average.toFixed(1);
        }
        let weight = fieldset.dataset.weight;
        if (!weight) { weight = 1; }
        totalWeightedAverage += (average || 0) * weight;
        totalWeight += Number(weight);
      }
      const classActivity = totalWeightedAverage / totalWeight;
      const outputFinal = form.querySelector(".final-output");
      if (isNaN(classActivity)) {
        outputFinal.value = "";
      } else if (max == 5) {
        outputFinal.value = "CA: " + (classActivity * 100 / max).toFixed(1);
      } else {
        outputFinal.value = "CA: " + classActivity.toFixed(1);
      }
    }

    const calcBtn = form.querySelector('[type="button"]');
    if (calcBtn) {
      calcBtn.addEventListener("click", setOutputValues);
    }

    function detectChange() {
      const inputs = form.querySelectorAll("input");
      for (let input of inputs) {
        if (input.value) {
          return true;
        }
      }
    }

    form.addEventListener("reset", function(event) {
      if (detectChange() && !confirm("Your changes will be lost.\nAre you sure you want to reset?")) {
        event.preventDefault();
      }
    });

    window.addEventListener("beforeunload", function(event) {
      if (detectChange()) {
        event.returnValue = "Your changes may be lost.";
      }
    });
  }
});
