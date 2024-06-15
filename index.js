$( document ).ready(function() {

    // Drop Down Function
    $('#menuButton').on('change', function(){
        ($('#menuButton').is(':checked')) ? (
            $('#navLinks').css({'right': '0px'})
        ) : (
            $('#navLinks').css({'right':'-200px'})
        );
    });

    // $('nav a[href*="#"]').on('click', function (){
    //     $('html, body').animate({
    //         scrollTop: $($(this).attr('href')).offset().top - 100
    //     }, 1500);
    // });

});

AOS.init();
