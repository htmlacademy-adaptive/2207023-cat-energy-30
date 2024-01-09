/* в этот файл добавляет скрипты*/
const noJS = document.querySelectorAll('[class*="--nojs"]');
for(let i = 0; i < noJS.length; i++) {
  for(let j = 0; j < noJS[i].classList.length; j++) {
    const classEl = noJS[i].classList[j].match(/--nojs/);//.input;
    if(classEl !== null) {
      noJS[i].classList.remove(String(classEl.input));
    }
  }
}

const pageCurrents = document.querySelectorAll('[class*="--current"]');
for(let i = 0; i < pageCurrents.length; i++) {
  pageCurrents[i].setAttribute('tabindex', '-1');
}

const menuButtonToggle = document.querySelector('.menu-btn');
const menuBlock = document.querySelector('.navigation__list');

menuButtonToggle.addEventListener('click', () => {
  menuButtonToggle.classList.toggle('menu-btn--active');

  if(!menuBlock.classList.contains('navigation__list--open')) {
    menuBlock.style.display = 'flex';
    setTimeout(() => {
      menuBlock.classList.add('navigation__list--open');
    }, 100);
  } else {
    menuBlock.classList.remove('navigation__list--open');
    setTimeout(() => {
      menuBlock.style.display = '';
    }, 300);
  }
});
