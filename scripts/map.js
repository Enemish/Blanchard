// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init()
{
    // Создание карты.
    var myMap = new ymaps.Map("map1",
    {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.760148, 37.614639],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16,
        controls: [],
      });
        var zoomControl = new ymaps.control.ZoomControl({
          options: {
            size: "small",
            position: { right: 25, top: 300 },
          }
        });
        myMap.behaviors.disable('scrollZoom');
        myMap.controls.add(zoomControl);

        var geolocationControl = new ymaps.control.GeolocationControl({
          options: {
            position: { right: 25, top: 380 },
          }
        });
        myMap.controls.add(geolocationControl);

    var myPlacemark = new ymaps.Placemark([55.760148, 37.614639], {}, {
        iconLayout: 'default#image',
        /* iconImageHref: '/images/map_point.svg', */
        iconImageSize: [0, 0],
        iconImageOffset: [-10, -10]
    });
    myMap.geoObjects.add(myPlacemark);
}
