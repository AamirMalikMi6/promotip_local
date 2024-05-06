import $ from 'jquery'
$(function () {
    var locale = document.documentElement.lang;

    switch (locale) {
        case 'nl':
            break;
        case 'fr':
            break;
    }

    $.cookieBubble({
        buttonColor: '#d77f7b',
        iconColor: '#d77f7b'
    });

    $("#loginFrom").on("submit", function (event) {
        event.preventDefault();
        let currentUrl = window.location.href;
        $('.ajax-errors').html("");
        $.post("/alogin/", $(this).serialize(), function (data) {

            $('.ajax-errors').html("");
            if (data.security) $('.ajax-errors').append(data.security);

            if (data.warning) $('.ajax-errors').append(data.warning);

            if (data.warning || data.security) $('.ajax-errors').css('display', 'block');
            if (!data.security && !data.warning) {
                if ( currentUrl.includes('login') ) {
                    window.location.href = '/';
                } else {
                    location.reload();
                }
            } 
        });
    });

    $("#registerForm").on("submit", function (event) {
        $('.ajax-errors').html("");
        event.preventDefault();
        $.post("/aregister/", $(this).serialize(), function (data) {
            $('.ajax-errors').html("");

            $.each(data.errors, function (index, errors) {
                if (index !== "#") {
                    $.each(errors, function (errorIndex, errorMesssage) {
                        $('#error_' + index).append(errorMesssage);
                    });
                }
            });

            if (data.errors) $('.ajax-errors').css('display', 'block');

            if (!data.errors) {
                window.location.href ='/registreren/klaar/';
            }

        });

    });

    $('.modal').on('hidden.bs.modal', function (e) {
        $('.ajax-errors').html("");
    });

    $("#btn_register").click((e) => {
        e.preventDefault();
        $('#login').modal('hide');
        $('#register').modal('show');
    });

    $("#btn_login").click((e) => {
        e.preventDefault();
        $('#register').modal('hide');
        $('#login').modal('show');
    });

    if (window.location.pathname == '/login/') {
        $('#login').modal('show');
    }

    if (window.location.pathname == '/register/') {
        $('#register').modal('show');
    }

    $('[data-toggle="tooltip"]').tooltip();

    $('#order_dates').on('change', function () {
        $(this).parents('form').submit();
    });

});

$("#visitorRegisterFrom").on("submit", function (event) {
    alert('Registratie is gelukt. Schrijf nu uw review!')
    $('.ajax-errors').html("");
    event.preventDefault();
    $.post("/vAuth/", $(this).serialize(), function (data) {
        $('.ajax-errors').html("");

        $.each(data.errors, function (index, errors) {
            if (index !== "#") {
                $.each(errors, function (errorIndex, errorMesssage) {
                    $('#error_' + index).append(errorMesssage);
                });
            }
        });

        if (data.errors) $('.ajax-errors').css('display', 'block');

        if (!data.errors) {
            window.location.reload();
        }

    });

});


$("#visitorLoginFrom").on("submit", function (event) {
    event.preventDefault();
    let currentUrl = window.location.href;
    $('.ajax-errors').html("");
    $.post("/vAuth/", $(this).serialize(), function (data) {

        $('.ajax-errors').html("");
        if (data.security) $('.ajax-errors').append(data.security);

        if (data.warning) $('.ajax-errors').append(data.warning);

        if (data.warning || data.security) $('.ajax-errors').css('display', 'block');
        if (!data.security && !data.warning) {
            location.reload();
        }
    });
});

