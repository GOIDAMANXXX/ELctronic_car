// =============================
// 1. Подсветка активной секции
// =============================

const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('.sidebar nav a');

window.addEventListener('scroll', () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Добавим стиль для активной ссылки
// (добавь это в style.css)
/*
.sidebar nav ul li a.active {
  color: #1f7aed;
  font-weight: bold;
}
*/

// =============================
// 2. Обработка формы
// =============================

const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // отмена отправки по умолчанию

  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector('textarea').value;

  if (!name || !email || !message) {
    alert("Пожалуйста, заполните все поля.");
    return;
  }

  // Имитация отправки (в реальности тут нужен бэкенд или сервис)
  alert("Спасибо, ваше сообщение отправлено!");

  form.reset(); // очистить форму 
  // Открытие/закрытие меню на мобильных
const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});


