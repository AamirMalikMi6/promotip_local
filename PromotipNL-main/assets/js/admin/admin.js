
$(function () {
    $('#category_channel').on('change', function () {
        $('#category_parent').val('');
        setParent();
    });

    setParent();

    $("#form-search-user").on("submit", function (event) {
        event.preventDefault();
        $.post("/zoeken-gebruiker", $(this).serialize(), function (data) {
            $('#t-user-admin > tbody').empty();
            if ( data.error ) {
                $('#t-user-admin > tbody').append('<tr><td>'+data.error+'</td><td>&nbsp;</td><td>&nbsp;</td></tr>');
            } else {
                $('#t-user-admin > tbody').append(data);
            }
        });
    });

});

function setParent() {
    var has_data = 0;
    var selected = $('#category_channel').val();

    $('#category_parent').find('option').each(function (e) {
        var value = $(this).val().split('-');
        $(this).removeClass('d-none');

        if (selected == value[0]) {
            has_data = 1;
        }
        else {
            $(this).addClass('d-none');
        }
    });

    if (has_data == 1) {
        $('label[for="category_parent"]').removeClass('d-none');
        $('#category_parent').removeClass('d-none');
    }
    else {
        $('label[for="category_parent"]').addClass('d-none');
        $('#category_parent').addClass('d-none');
    }
}