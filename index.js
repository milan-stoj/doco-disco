$("#nav-placeholder").load("nav.html");

$( document ).ready(function() {

    // Drop Down Function
    $('#menuButton').on('change', function(){
        ($('#menuButton').is(':checked')) ? (
            $('#navLinks').css({'right': '0px'})
        ) : (
            $('#navLinks').css({'right':'-200px'})
        );
    });

});

AOS.init();