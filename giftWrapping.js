//Chase's website 

//keeps the navbar at the top when you scroll
var stickyNavTop = $('#header').offset().top;

$(window).scroll(function() {  
    if ($(window).scrollTop() > stickyNavTop) {
        $('#header').addClass('fixed');
    }
    else {
        $('#header').removeClass('fixed');
    }  
});
