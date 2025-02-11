document.addEventListener('DOMContentLoaded', function() {
  // Задаём базовые длительности анимаций для орбит
  document.querySelector('.orbit.mercury').setAttribute('data-base-duration', 5);
  document.querySelector('.orbit.venus').setAttribute('data-base-duration', 7);
  document.querySelector('.orbit.earth').setAttribute('data-base-duration', 10);
  document.querySelector('.orbit.mars').setAttribute('data-base-duration', 12);
  document.querySelector('.orbit.jupiter').setAttribute('data-base-duration', 15);
  document.querySelector('.orbit.saturn').setAttribute('data-base-duration', 18);
  document.querySelector('.orbit.uranus').setAttribute('data-base-duration', 20);
  document.querySelector('.orbit.neptune').setAttribute('data-base-duration', 22);
  
  const speedSlider = document.getElementById('speed');
  const toggleBtn = document.getElementById('toggleBtn');
  let isPaused = false;
  
  function updateAnimationSpeed() {
    const speed = speedSlider.value;
    const orbits = document.querySelectorAll('.orbit');
    orbits.forEach(orbit => {
      const baseDuration = orbit.getAttribute('data-base-duration');
      orbit.style.animationDuration = (baseDuration / speed) + 's';
    });
  }
  
  speedSlider.addEventListener('input', updateAnimationSpeed);
  
  toggleBtn.addEventListener('click', () => {
    isPaused = !isPaused;
    const orbits = document.querySelectorAll('.orbit');
    orbits.forEach(orbit => {
      orbit.style.animationPlayState = isPaused ? 'paused' : 'running';
    });
    toggleBtn.textContent = isPaused ? 'Продолжить' : 'Пауза';
  });
  
  updateAnimationSpeed();

  // Эффект звезд при движении мыши
  document.addEventListener('mousemove', function(e) {
    const star = document.createElement('div');
    star.className = 'mouse-star';
    // Центрируем маленькую звезду относительно курсора
    star.style.top = (e.pageY - 2.5) + 'px';
    star.style.left = (e.pageX - 2.5) + 'px';
    document.body.appendChild(star);
    // Удаляем элемент после завершения анимации (0.8s)
    setTimeout(() => star.remove(), 800);
  });
});
