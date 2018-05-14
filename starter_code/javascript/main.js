
$(function(){
        // var header = document.getElementById('header');
        // var headroom = new Headroom(header);
        // headroom.init();

  //menu responsivo
    var ancho = $(window).width(),
    enlaces = $('#enlaces'),
    btnmenu = $('#btn-menu'),
    icono = $('#btn-menu .icono');
    if(ancho < 769){
        enlaces.hide();
        icono.addClass('fa-bars');

    }
    btnmenu.on('click', function(e){
        $(enlaces).slideDown();
        icono.toggleClass('fa-bars');
        icono.toggleClass('fa-times');
    });
    $(window).on('rezise',function(){
        if($(this).width()>769){
            enlaces.show();
            icono.addClass('fa-times');
            icono.removeClass('fa-bars');
        } else {
            enlaces.hide();
            icono.addClass('fa-bars');
            icono.removeClass('fa-times');
        }
    });
});