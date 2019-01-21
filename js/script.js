$(document).ready(function () {
    //Animate
    $('.header__link').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top -70}, 800, 'linear');
    });
    $('#btnContacto').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top -70}, 800, 'linear');
    })
    $('.menu__dropdown--item a').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top -60}, 800, 'linear');
    })
    //Ejecuta funciones con data dinamica
    Servicios();
    SolicitarServicio();
    ServiciosCompleto();

    //match media for carousels
    addCarousel('servicios-carousel',1,2,4);
    addCarousel('services-carousel',1,2,4);
    addCarousel('solicitarServicio-carousel',1,2,3);
    function addCarousel(element, mobItems, tabletItems, deskItems) {
        $("#"+element).owlCarousel({
            loop: true,
            margin: 16,
            nav: false,
            responsive: {
                0: {
                    items: mobItems
                },
                590: {
                    items: tabletItems,
                    margin: 24
                },
                1050: {
                    items: deskItems,
                    margin: 20,
                    mouseDrag: false
                }
            }
        });
    }

    //Menu dropdown
    $(".menu__dropdown--item").click(function (e) {
        if (!$(this).hasClass("active")) {
            $('.menu__dropdown--item').find('.menu__dropdown--body').slideUp("slow");
            $('.menu__dropdown--item').removeClass("active");
            $(this).find('.menu__dropdown--body').slideDown("slow");
            $(this).addClass("active");
        }
        else {
            $(this).find('.menu__dropdown--body').slideUp("slow");
            $(this).removeClass("active");
        }
    })

    //Menu fixed
    window.addEventListener('scroll', function () {
        var lastScrollTop = 10;
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
            $('.banner__img img').css('z-index','1');
            $("header, #nuestrosSeguros").addClass("active");
            if ($("#overlay").hasClass("active")) {
                $('#overlay').removeClass("active");
                $("#menuDesktop").slideToggle("fast");
            }
        } else {
            $('.banner__img img').css('z-index','5');
            $("header, #nuestrosSeguros").removeClass("active");
        }

        if (window.matchMedia("(min-width: 1050px)").matches) {            
            if (currentScroll > 900) {
                $('#anuncio').css('display', 'none');

            } else {
                $('#anuncio').css('display', 'block');

            }
        }
        lastScrollTop = currentScroll;
    });

    //Menu mobile
    $("#menuOpen, #menuClose").click(function () {
        $("#menuMobile, body").toggleClass("active");
    })
    $(".menu__dropdown--header").click(function () {
        $("#menuMobile, body").toggleClass("active");
    })

    //Elements
    $("#fullName").on('focus',onFocus);
    $("#email").on('focus',onFocus);
    $("#message").on('focus',onFocus);
    $("#fullName").on('blur',onBlur);
    $("#email").on('blur',onBlur);
    $("#message").on('blur',onBlur);
    //Form Contact
    $('#form-contact').on("submit", function(e) {
        e.preventDefault();
        const dataForm = {
            fullName: $('#fullName').val(),
            email: $('#email').val(),
            message:$('#message').val()
        }
        // if (!validarInputs()) {
        //     console.log('Falto validar los Input');
        //     e.preventDefault();
        //     return false;
        // } else {
            $.ajax({
                method: "POST",
                url: "https://formspree.io/infofortalecer@gmail.com",
                data: $('#contact-form').serialize(),
                data:dataForm,
                dataType: "json"
            });
            alert("Su mensaje fue enviado satisfactoriamente\nGracias!");
            console.log('Envia');
            $('#form-contact')[0].reset();
        // }
    });

    // Modal Términos
    $('#tyc').click(function(){
        $('#modal').addClass('open');
    })
    $('.close').click(function(){
        $('#modal').removeClass('open');
    })
});
