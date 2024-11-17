$(document).ready(function () {
    const $menuButton = $('#menuButton');
    const $navLinks = $('#navLinks');
    const $navbar = $('nav');

    // Drop Down Function
    $menuButton.on('change', function () {
        if ($menuButton.is(':checked')) {
            $navLinks.css({ right: '0px' });
        } else {
            $navLinks.css({ right: '-200px' });
        }
    });

    // Uncheck menuButton when a link is clicked
    $('nav a[href*="#"]').on('click', function () {
        $menuButton.prop('checked', false); // Uncheck the checkbox
        $navLinks.css({ right: '-200px' }); // Close the menu
    });

    // Shrink navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            $navbar.addClass('shrunk');
        } else {
            $navbar.removeClass('shrunk');
        }
    });

    // Initialize AOS
    AOS.init();
});
