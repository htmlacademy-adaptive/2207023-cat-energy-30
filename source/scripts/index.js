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
      menuBlock.style.display = null;
    }, 300);
  }
});

/*дописать изменение картинки и размера, в зависимости от размера экрана и плотности*/
/* eslint-disable */
const init = () => {
  const myMap = new ymaps.Map('map', {
    center: [59.938461, 30.322989],
    zoom: 14
  }, {
    searchControlProvider: 'yandex#search'
  });

  const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: null,
    balloonContent: null
  }, {
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'images/map-pin@1x.png',
    // Размеры метки.
    iconImageSize: [57, 53],
    // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
    iconImageOffset: [-26, -44]
  });

  myMap.geoObjects.add(myPlacemark);
};

ymaps.ready(init);
/* eslint-enable */
