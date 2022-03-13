let ymaps;

ymaps.ready(function () {
  let myMap = new ymaps.Map('map', {
    center: [59.93889, 30.32304],
    zoom: 16,
    }, {
      searchControlProvider: 'yandex#search'
  }),

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {

    iconLayout: 'default#image',
    iconImageHref: '../img/svg/pin.svg',
    iconImageSize: [18, 22],
    iconImageOffset: [0, -22],
  });

  myMap.geoObjects.add(myPlacemark);

});
