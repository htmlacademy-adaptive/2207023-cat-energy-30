/* в этот файл добавляет скрипты*/
const menuButtonToggle = document.querySelector('.menu-btn');

menuButtonToggle.addEventListener('click', () => {
  menuButtonToggle.classList.toggle('menu-btn--active');
});
