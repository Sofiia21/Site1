$(document).ready(function(){
    // Инициализация Slick Slider
    $('.slider').slick({
      autoplay: true,        // Автоматическая прокрутка слайдов
      autoplaySpeed: 5000,   // Скорость автоматической прокрутки (5000 мс = 5 секунд)
      dots: true,            // Показывать точки навигации
      //arrows: true,          // Показывать стрелки навигации
      adaptiveHeight: true,  // Адаптировать высоту слайдера к высоте текущего слайда
      //prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', // Кнопка предыдущего слайда
      //nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', // Кнопка следующего слайда
      responsive: [          // Адаптивные настройки для разных разрешений
        {
          breakpoint: 768,   // Настройки для экранов шириной менее 768px
          settings: {
            arrows: false    // Скрыть стрелки на маленьких экранах
          }
        }
      ]
    });
  
    // Функционал для переключения слайдов при клике на точки
    $('.dot').click(function () {
      var index = $(this).index();
      $('.slider').slick('slickGoTo', index);
    });
  });
  