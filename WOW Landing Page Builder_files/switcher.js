/*-----------------------------------------------------------------------------------
 /* Styles Switcher
 -----------------------------------------------------------------------------------*/

window.console = window.console || (function () {
    var c = {};
    c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function () {
    };
    return c;
})();


jQuery(document).ready(function ($) {

    // Color Changer
    $(".blue").click(function () {
        $("#colors").attr("href", "css/colors/blue.css");
        return false;
    });
    $(".deep-blue").click(function () {
        $("#colors").attr("href", "css/colors/blue-deep.css");
        return false;
    });
    $(".royal-blue").click(function () {
        $("#colors").attr("href", "css/colors/royal-blue.css");
        return false;
    });
    $(".grape").click(function () {
        $("#colors").attr("href", "css/colors/grape.css");
        return false;
    });
    $(".grass").click(function () {
        $("#colors").attr("href", "css/colors/grass.css");
        return false;
    });
    $(".radial-red").click(function () {
        $("#colors").attr("href", "css/colors/radial-red.css");
        return false;
    });

    $(".green").click(function () {
        $("#colors").attr("href", "css/colors/green.css");
        return false;
    });

    $(".orange").click(function () {
        $("#colors").attr("href", "css/colors/orange.css");
        return false;
    });


    $(".yellow").click(function () {
        $("#colors").attr("href", "css/colors/yellow.css");
        return false;
    });
    $(".red").click(function () {
        $("#colors").attr("href", "css/colors/red.css");
        return false;
    });


    $(".purple").click(function () {
        $("#colors").attr("href", "css/colors/purple.css");
        return false;
    });

    $(".slate").click(function () {
        $("#colors").attr("href", "css/colors/slate.css");
        return false;
    });





    $(".light").click(function () {
        $("#layout").attr("href", "");
        $(".navbar-brand img").attr("src", "images/logo.png");
        $('.navbar').removeClass('nav-dark navbar-inverse');
        $('.navbar').addClass('nav-light navbar-default');
        
        return false;
    });

    $(".dark").click(function () {
        $("#layout").attr("href", "css/dark.css");
        $(".navbar-brand img").attr("src", "images/logo-light.png");
        $('.navbar').addClass('nav-dark navbar-inverse');
        $('.navbar').removeClass('nav-light navbar-default');
        return false;
    });






    // Style Switcher	
    $('#style-switcher').animate({
        left: '-195px'
    });

    $('#style-switcher h2 a').click(function (e) {
        e.preventDefault();
        var div = $('#style-switcher');
        if (div.css('left') === '-195px') {
            $('#style-switcher').animate({
                left: '0px'
            });
        } else {
            $('#style-switcher').animate({
                left: '-195px'
            });
        }
    })

    $('.colors li a').click(function (e) {
        e.preventDefault();
        $(this).parent().parent().find('a').removeClass('active');
        $(this).addClass('active');
    })


});