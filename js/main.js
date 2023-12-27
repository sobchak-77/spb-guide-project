// --- SWIPER ---

const swiper = new Swiper('.swiper-container', {
  slidesPerGroup: 1,
  slidesPerView: 1,
  speed: 600,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

// --- MAP ---

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map('mapPetrograd', {
    center: [59.943304, 30.318303],
    zoom: 12,
    controls: [],
    behaviors: ['drag', 'pinchZoom', 'mouseTilt'],
  });

  var myPlacemark = new ymaps.Placemark([59.943304, 30.318303], {}, {
    iconLayout: 'default#image',
    iconImageHref: "./img/map-icon.svg",
    iconImageSize: [48, 48],
    iconImageOffset: [-24, -45],
  });

  myMap.geoObjects.add(myPlacemark);
};

// --- ANIMATIONS ---

new WOW().init();
