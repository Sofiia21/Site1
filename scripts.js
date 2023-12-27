$(document).ready(function(){
    $('.slider').slick({
      autoplay: true,       
      autoplaySpeed: 5000,   
      dots: true,            
      arrows: true,          
      adaptiveHeight: true,  
      prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
      nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', 
      responsive: [         
      {
        breakpoint: 768,   
        settings: {
          arrows: false   
        }
      }
    ]
  });
  
    $('.dot').click(function () {
      var index = $(this).index();
      $('.slider').slick('slickGoTo', index);
    });
  });
  