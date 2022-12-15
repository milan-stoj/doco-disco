// var navLinks = document.getElementById("navLinks")
// function showMenu(){
//     navLinks.style.right = "0";
// }
// function hideMenu(){
//     navLinks.style.right = "-200px";
// }

AOS.init();


$( document ).ready(function() {
    
    // Function to change the nav-bar on scroll
    // $(window).scroll(function(){
    //     ($(window).scrollTop() >= 100) ? (
    //         $('.fixed-nav-bar').addClass('scrolled'),
    //         $('.the-bass').addClass('scrolled')
    //     ) : (
    //         $('.fixed-nav-bar').removeClass('scrolled'),
    //         $('.the-bass').removeClass('scrolled')
    //     );
    // });
    
    // Drop Down Function
    $('#menuButton').on('change', function(){
        ($('#menuButton').is(':checked')) ? (
            $('#navLinks').css({'right': '0px'})
        ) : (
            $('#navLinks').css({'right':'-200px'})
        );
    });

    
});