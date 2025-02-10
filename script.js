document.addEventListener("DOMContentLoaded", function() {
  /* Preloader: скрытие после загрузки */
  window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    preloader.style.transition = "opacity 0.5s ease-out";
    preloader.style.opacity = "0";
    setTimeout(function() {
      preloader.style.display = "none";
    }, 500);
  });

  /* Переключение темы */
  document.getElementById("toggleTheme").addEventListener("click", function() {
    document.body.classList.toggle("dark");
  });

  /* Плавная прокрутка при клике на меню */
  document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* Параллакс-эффект для hero-контента */
  window.addEventListener("scroll", () => {
    const heroContent = document.querySelector(".hero-content");
    let scrolled = window.pageYOffset;
    heroContent.style.transform = "translateY(" + (scrolled * 0.5) + "px)";

    // Отображение кнопки возврата наверх
    const scrollBtn = document.getElementById("scrollToTop");
    if (window.pageYOffset > 300) {
      scrollBtn.classList.add("active");
    } else {
      scrollBtn.classList.remove("active");
    }
  });

  /* Анимация частиц на canvas */
  const canvas = document.getElementById("particle-canvas");
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
      let x = Math.random() * (canvas.width - 2 * size) + size;
      let y = Math.random() * (canvas.height - 2 * size) + size;
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

  /* IntersectionObserver для появления элементов */
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

  /* Обработка модального окна (открытие по клику на карточку) */
  const modal = document.getElementById("modal");
  const closeModalBtn = document.querySelector(".close-button");
  document.querySelectorAll(".feature-card, .service-card").forEach(card => {
    card.addEventListener("click", function() {
      modal.style.display = "block";
    });
  });
  closeModalBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });
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

  /* Кнопка возврата наверх */
  document.getElementById("scrollToTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
