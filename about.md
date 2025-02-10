<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>О Нас - Вторая страница сайта</title>
  <style>
    /* Основные CSS-переменные */
    :root {
      --bg-color: #ffffff;
      --text-color: #333333;
      --primary-color: #1d72b8;
      --card-bg-color: #ffffff;
      --section-bg-color: #f4f4f4;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background: var(--bg-color);
      color: var(--text-color);
      transition: background 0.3s, color 0.3s;
      overflow-x: hidden;
    }
    /* Фиксированное меню */
    header {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.3);
      padding: 10px 0;
      z-index: 1000;
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
    /* Эффект подчеркивания при наведении */
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
    .header-spacer {
      height: 60px; /* Отступ, чтобы контент не закрывался фиксированным меню */
    }
    /* Preloader */
    #preloader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--bg-color);
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
    /* Анимация появления секций */
    .section {
      padding: 50px 20px;
      background: var(--section-bg-color);
      animation: fadeInUp 1s ease forwards;
      opacity: 0;
    }
    @keyframes fadeInUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    /* Карточки с информацией */
    .content-card {
      background: var(--card-bg-color);
      padding: 20px;
      margin: 20px auto;
      width: 90%;
      max-width: 800px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .content-card:hover {
      transform: scale(1.03);
      box-shadow: 0 8px 12px rgba(0,0,0,0.2);
    }
    h2 {
      text-align: center;
      margin-bottom: 20px;
    }
    p {
      line-height: 1.6;
      font-size: 1em;
    }
    button {
      background: var(--primary-color);
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      transition: transform 0.3s;
      display: block;
      margin: 20px auto;
    }
    button:hover {
      transform: scale(1.05);
    }
    /* Footer */
    footer {
      text-align: center;
      padding: 20px;
      background: #333333;
      color: #ffffff;
    }
    /* Кнопка возврата наверх */
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
  </style>
</head>
<body>
  <!-- Preloader -->
  <div id="preloader">
    <div class="spinner"></div>
    <p>Загрузка страницы...</p>
  </div>
  
  <!-- Фиксированное меню -->
  <header>
    <nav>
      <ul>
        <li><a href="index.html">Главная</a></li>
        <li><a href="#about">О нас</a></li>
        <li><a href="#team">Наша команда</a></li>
        <li><a href="#history">Наша история</a></li>
      </ul>
    </nav>
  </header>
  <div class="header-spacer"></div>
  
  <!-- Секция: О нас -->
  <section id="about" class="section">
    <h2>О Нас</h2>
    <div class="content-card">
      <p>Мы — инновационная компания, создающая качественные веб-решения. Наша миссия — сделать мир удобнее и красивее благодаря современным технологиям и креативному дизайну.</p>
      <button onclick="alert('Более подробная информация о нашей компании')">Узнать больше</button>
    </div>
  </section>
  
  <!-- Секция: Наша команда -->
  <section id="team" class="section">
    <h2>Наша Команда</h2>
    <div class="content-card">
      <p>Наша команда состоит из высококвалифицированных специалистов по дизайну, разработке и маркетингу. Каждый из нас вносит уникальный вклад в достижение общих целей.</p>
    </div>
    <div class="content-card">
      <p>Мы стремимся к постоянному совершенствованию и используем в работе самые современные технологии для достижения наилучших результатов.</p>
    </div>
  </section>
  
  <!-- Секция: Наша история -->
  <section id="history" class="section">
    <h2>Наша История</h2>
    <div class="content-card">
      <p>Компания была основана в 2020 году с целью разработки инновационных решений для бизнеса. С тех пор мы успешно реализовали множество проектов для клиентов по всему миру.</p>
    </div>
  </section>
  
  <!-- Кнопка возврата наверх -->
  <button id="scrollToTop">&#8679;</button>
  
  <!-- Footer -->
  <footer>
    <p>&copy; 2025 Ваша Компания. Все права защищены.</p>
  </footer>
  
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      /* Preloader: скрытие после загрузки страницы */
      window.addEventListener("load", function() {
        const preloader = document.getElementById("preloader");
        preloader.style.transition = "opacity 0.5s ease-out";
        preloader.style.opacity = "0";
        setTimeout(function() {
          preloader.style.display = "none";
        }, 500);
      });
      
      /* Плавная прокрутка при клике по навигационным ссылкам */
      document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function(e) {
          if(this.hash !== "") {
            e.preventDefault();
            const targetId = this.getAttribute("href").split("#")[1];
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
              targetSection.scrollIntoView({ behavior: "smooth" });
            }
          }
        });
      });
      
      /* Кнопка возврата наверх */
      const scrollBtn = document.getElementById("scrollToTop");
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          scrollBtn.classList.add("active");
        } else {
          scrollBtn.classList.remove("active");
        }
      });
      scrollBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      
      /* IntersectionObserver для плавного появления секций */
      const sections = document.querySelectorAll(".section");
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
          }
        });
      }, { threshold: 0.1 });
      sections.forEach(section => {
        observer.observe(section);
      });
    });
  </script>
</body>
</html>
