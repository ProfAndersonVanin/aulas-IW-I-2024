$(function () {


    //HEADER
    $(window).scroll(function () {
          if($(this).scrollTop() > 0)
          {
              if (!$('.main_header').hasClass('fixed'))
              {
                  $('.main_header').stop().addClass('fixed').css('top', '-0px').animate(
                      {
                          'top': '0px'
                      }, 500);
              }
          }
          else
          {
              $('.main_header').removeClass('fixed');
          }
    });


});