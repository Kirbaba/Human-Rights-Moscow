jQuery(function ($) {

    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $('body,html').animate({scrollTop: 0}, 1000);
    });

    $('.smoothScroll').click(function (event) {
        event.preventDefault();
        var href = $(this).attr('href');
        var target = $(href);
        var top = target.offset().top;
        $('html,body').animate({
            scrollTop: top
        }, 1000);
    });

    $('.hamburger-slim').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('hamburger-slim--active');
    });

    $('.thumbox').on('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('data-id');
        var img = $(this).attr('src');
        if ($(this).hasClass('video')) {
            $('body').append('<div class="active_gallery"><iframe class="video-preview"  src="//www.youtube.com/embed/' + id + '?rel=0"" ></iframe><span class="close"">&times;</span></div>');
        } else {
            $('body').append('<div class="active_gallery"><img src="' + img + '" /><span class="close"">&times;</span></div>');
        }

    });

    $('body').delegate('.close', 'click', function () {
        $('.active_gallery').addClass('inactive');
        setTimeout(function () {
            $('.active_gallery').remove();
        }, 200);
    });
});


$(function () {

    $(document).on('click', '#countCostBtn', function () {
        var code = $('input[name="phone--code"]').val();
        var numb = $('input[name="phone--numb"]').val();

        if(code!="" && numb!=""){
            jQuery.ajax({
                url: ajaxurl, //url, к которому обращаемся
                type: "POST",
                data: "action=sendFeedback&phone=1&code=" + code + "&numb=" + numb, //данные, которые передаем. Обязательно для action указываем имя нашего хука
                success: function (data) {
                    //модалка если понадобится
                    $('#thankModal').modal('show');

                    $('input[name="phone--code"]').val("");
                    $('input[name="phone--numb"]').val("");
                }
            });
        }

        return false;
    });
    $(document).on('click', '.contact-page--item--sub', function () {
        var name = $('input[name="contact-name"]').val();
        var mail = $('input[name="contact-email"]').val();
        var text = $('input[name="contact-message"]').text();

        console.log(name);
        console.log(mail);
        console.log(text);

        jQuery.ajax({
            url: ajaxurl, //url, к которому обращаемся
            type: "POST",
            data: "action=sendFeedback&contact=1&name=" + name + "&mail=" + mail + "&text=" + text, //данные, которые передаем. Обязательно для action указываем имя нашего хука
            success: function (data) {
                //модалка если понадобится
                $('#thankModal').modal('show');

                $('input[name="contact-name"]').val("");
                $('input[name="contact-email"]').val("");
                $('input[name="contact-message"]').text("");
            }
        });
        return false;
    });
    $(document).on('click', '#sendModalBtn', function () {
        var phone = $('input[name="phone"]').val();

        jQuery.ajax({
            url: ajaxurl, //url, к которому обращаемся
            type: "POST",
            data: "action=sendFeedback&modal=1&phone=" + phone, //данные, которые передаем. Обязательно для action указываем имя нашего хука
            success: function (data) {
                //модалка если понадобится
                $('#thankModal').modal('show');
                $('input[name="phone"]').val("");
            }
        });
        return false;
    });
    $(document).on('click', '#salesRequestBtn', function(){
        $('#sendFeedbackModal').modal('show');
    });
    $(document).on('click', '#serviceRequestBtn', function(){
        $('#sendFeedbackModal').modal('show');
    });

});
$(function() {
    $('h1').highlight( 'BMW X' );
    $('h1').highlight( 'BMW' );
    $('h2').highlight( 'BMW X' );
    $('h2').highlight( 'BMW' );
    $('.tuning--item h3').highlight( 'BMW X5, X5M E70' );
    $('.catalog__item h3').highlight( 'X' );
    
});




