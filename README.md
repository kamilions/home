<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Главная страница сайта</title>
  <style>
    /* Основные CSS-переменные для светлой и тёмной темы */
    :root {
      --bg-color: #ffffff;
      --text-color: #333333;
      --section-bg-color: #f4f4f4;
      --card-bg-color: #ffffff;
      --primary-color: #1d72b8;
    }
    body.dark {
      --bg-color: #121212;
      --text-color: #e0e0e0;
      --section-bg-color: #1f1f1f;
      --card-bg-color: #2c2c2c;
    }
    body {
      margin: 0;
      padding: 0;
      background: var(--bg-color);
      color: var(--text-color);
      font-family: Arial, sans-serif;
      overflow-x: hidden;
      transition: background 0.3s, color 0.3s;
    }
    
    /* Preloader */
    #preloader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 2000;
    }
    .spinner {
      width: 50px;
      height: 50px;
      border: 5px solid #ccc;
      border-top: 5px solid var(--primary-color);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    /* Фиксированное меню */
    header {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1000;
      background: rgba(0, 0, 0, 0.3);
      padding: 10px 0;
    }
    nav ul {
      list-style: none;
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 0;
    }
    nav ul li {
      margin: 0 15px;
      position: relative;
    }
    nav ul li a {
      text-decoration: none;
      color: #fff;
      font-weight: bold;
      transition: color 0.3s;
    }
    nav ul li a:hover {
      color: #ffd700;
    }
    /* Подчеркивание при наведении */
    nav ul li a::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background: #ffd700;
      transition: width 0.3s;
    }
    nav ul li a:hover::after {
      width: 100%;
    }
    
    /* Hero Section с анимированным градиентом и частицами */
    #hero {
      position: relative;
      overflow: hidden;
      min-height: 100vh;
      background: linear-gradient(45deg, #ff9a9e, #fad0c4, #fbc2eb, #a18cd1);
      background-size: 400% 400%;
      animation: gradientAnimation 15s ease infinite;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @keyframes gradientAnimation {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    /* Canvas для частиц в hero-блоке */
    #particle-canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    
    /* Контент в hero */
    .hero-content {
      position: relative;
      text-align: center;
      z-index: 2;
      padding: 20px;
      animation: fadeIn 2s ease forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .hero-content h1 {
      font-size: 3em;
      margin-bottom: 20px;
    }
    .hero-content p {
      font-size: 1.3em;
      margin-bottom: 30px;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s, transform 0.3s;
      background-color: var(--primary-color);
      color: #fff;
    }
    button:hover {
      transform: scale(1.05);
    }
    
    /* Секция «Фишки» */
    #features {
      padding: 50px 20px;
      background: var(--section-bg-color);
      animation: slideIn 1s ease-out;
    }
    @keyframes slideIn {
      from { transform: translateX(-100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    #features h2 {
      text-align: center;
      margin-bottom: 40px;
      font-size: 2.5em;
    }
    .features-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }
    .feature-card {
      background: var(--card-bg-color);
      width: 300px;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      opacity: 0;
      transform: translateY(20px);
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .feature-card.visible {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .feature-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }
    .feature-card h3 {
      margin-top: 0;
    }
    
    /* --- Новая секция: Сервисы --- */
    #services {
      padding: 50px 20px;
      background: var(--bg-color);
    }
    #services h2 {
      text-align: center;
      margin-bottom: 40px;
      font-size: 2.5em;
    }
    .services-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }
    .service-card {
      background: var(--card-bg-color);
      width: 300px;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      cursor: pointer;
      
      /* Изначальная позиция для анимации */
      opacity: 0;
      transform: translateX(-50px);
    }
    .service-card.visible {
      animation: fadeInLeft 0.8s ease-out forwards;
    }
    @keyframes fadeInLeft {
      from { opacity: 0; transform: translateX(-50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .service-card:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 12px rgba(0,0,0,0.2);
      transition: transform 0.3s;
    }
    .service-card h3 {
      margin-top: 0;
    }
    
    /* --- Новая секция: Галерея --- */
    #gallery {
      padding: 50px 20px;
      background: var(--section-bg-color);
    }
    #gallery h2 {
      text-align: center;
      margin-bottom: 40px;
      font-size: 2.5em;
    }
    .gallery-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }
    .gallery-item {
      overflow: hidden;
      border-radius: 10px;
      cursor: pointer;
      
      /* Изначальные значения для анимации */
      opacity: 0;
      transform: scale(0.8);
    }
    .gallery-item.visible {
      animation: zoomIn 0.6s ease forwards;
    }
    @keyframes zoomIn {
      from { transform: scale(0.8); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    .gallery-item img {
      width: 100%;
      display: block;
      transition: transform 0.3s;
    }
    .gallery-item:hover img {
      transform: scale(1.05);
    }
    
    /* --- Новая секция: Отзывы --- */
    #testimonials {
      padding: 50px 20px;
      background: var(--bg-color);
      text-align: center;
    }
    #testimonials h2 {
      font-size: 2.5em;
      margin-bottom: 40px;
    }
    .testimonial-slider {
      position: relative;
      height: 200px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .testimonial {
      position: absolute;
      opacity: 0;
      transition: opacity 1s ease;
      width: 80%;
      left: 50%;
      transform: translateX(-50%);
    }
    .testimonial.active {
      opacity: 1;
    }
    .testimonial p {
      font-size: 1.2em;
      margin-bottom: 15px;
    }
    .testimonial h4 {
      font-size: 1em;
      color: #555;
    }
    
    /* Модальное окно */
    .modal {
      display: none;
      position: fixed;
      z-index: 3000;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.7);
    }
    .modal-content {
      background: var(--card-bg-color);
      margin: 15% auto;
      padding: 20px;
      width: 80%;
      border-radius: 10px;
      animation: modalAnimation 0.5s;
      position: relative;
    }
    @keyframes modalAnimation {
      from { transform: scale(0.8); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    .close-button {
      position: absolute;
      right: 15px;
      top: 10px;
      font-size: 28px;
      font-weight: bold;
      cursor: pointer;
      transition: color 0.3s;
      color: var(--text-color);
    }
    .close-button:hover {
      color: #ff0000;
    }
    
    /* Scroll-to-top кнопка */
    #scrollToTop {
      position: fixed;
      bottom: 30px;
      right: 30px;
      background-color: var(--primary-color);
      color: #fff;
      border: none;
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.3s;
      z-index: 1500;
    }
    #scrollToTop.active {
      opacity: 1;
    }
    
    /* Footer */
    footer {
      text-align: center;
      padding: 20px;
      background: #333333;
      color: #ffffff;
    }
  </style>
</head>
<body>
  <!-- Preloader -->
  <div id="preloader">
    <div class="spinner"></div>
    <p>Загрузка...</p>
  </div>
  
  <!-- Фиксированное меню -->
  <header>
    <nav>
      <ul>
        <li><a href="#hero">Главная</a></li>
        <li><a href="#features">Фишки</a></li>
        <li><a href="#services">Сервисы</a></li>
        <li><a href="#gallery">Галерея</a></li>
        <li><a href="#testimonials">Отзывы</a></li>
        <li><a href="#footer">Контакты</a></li>
      </ul>
    </nav>
  </header>
  
  <!-- Hero Section -->
  <section id="hero">
    <canvas id="particle-canvas"></canvas>
    <div class="hero-content">
      <h1>Добро пожаловать на наш сайт!</h1>
      <p>Откройте для себя множество анимаций и инновационных решений</p>
      <button id="toggleTheme">Переключить тему</button>
    </div>
  </section>
  
  <!-- Секция «Фишки» -->
  <section id="features">
    <h2>Наши Фишки</h2>
    <div class="features-container">
      <div class="feature-card">
        <h3>Анимация</h3>
        <p>Великолепные анимации для привлечения внимания пользователя.</p>
      </div>
      <div class="feature-card">
        <h3>Интерактив</h3>
        <p>Удобное и интуитивное управление с помощью JavaScript-скриптов.</p>
      </div>
      <div class="feature-card">
        <h3>Функциональность</h3>
        <p>Различные фишки для улучшения опыта работы с сайтом.</p>
      </div>
    </div>
  </section>
  
  <!-- Секция «Сервисы» -->
  <section id="services">
    <h2>Наши Сервисы</h2>
    <div class="services-container">
      <div class="service-card">
        <h3>Дизайн</h3>
        <p>Изысканный дизайн и креативные решения для вашего бизнеса.</p>
      </div>
      <div class="service-card">
        <h3>Разработка</h3>
        <p>Современные технологии и индивидуальный подход к каждому проекту.</p>
      </div>
      <div class="service-card">
        <h3>Поддержка</h3>
        <p>Профессиональная поддержка и обслуживание 24/7 для наших клиентов.</p>
      </div>
    </div>
  </section>
  
  <!-- Секция «Галерея» -->
  <section id="gallery">
    <h2>Галерея Работ</h2>
    <div class="gallery-container">
      <div class="gallery-item"><img src="https://picsum.photos/seed/1/300/200" alt="Gallery Image 1"></div>
      <div class="gallery-item"><img src="https://picsum.photos/seed/2/300/200" alt="Gallery Image 2"></div>
      <div class="gallery-item"><img src="https://picsum.photos/seed/3/300/200" alt="Gallery Image 3"></div>
      <div class="gallery-item"><img src="https://picsum.photos/seed/4/300/200" alt="Gallery Image 4"></div>
      <div class="gallery-item"><img src="https://picsum.photos/seed/5/300/200" alt="Gallery Image 5"></div>
      <div class="gallery-item"><img src="https://picsum.photos/seed/6/300/200" alt="Gallery Image 6"></div>
    </div>
  </section>
  
  <!-- Секция «Отзывы» -->
  <section id="testimonials">
    <h2>Отзывы Клиентов</h2>
    <div class="testimonial-slider">
      <div class="testimonial active">
        <p>"Отличный сервис! Рекомендую всем!"</p>
        <h4>Иван Иванов</h4>
      </div>
      <div class="testimonial">
        <p>"Замечательный опыт. Всё работает идеально."</p>
        <h4>Мария Петрова</h4>
      </div>
      <div class="testimonial">
        <p>"Инновационные анимации и профессиональный подход."</p>
        <h4>Алексей Смирнов</h4>
      </div>
    </div>
  </section>
  
  <!-- Модальное окно для информации -->
  <div id="modal" class="modal">
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <h2>Подробнее</h2>
      <p>Здесь вы можете разместить дополнительную информацию о выбранном элементе.</p>
    </div>
  </div>
  
  <!-- Кнопка возврата наверх -->
  <button id="scrollToTop">&#8679;</button>
  
  <!-- Footer -->
  <footer id="footer">
    <p>&copy; 2025 Ваш сайт. Все права защищены.</p>
  </footer>
  
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      /* Preloader: исчезновение после загрузки */
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
      
      /* Система частиц в canvas */
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
      
      /* Обработка модального окна: открытие по клику на карточку (фишки) */
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
  </script>
</body>
</html>
