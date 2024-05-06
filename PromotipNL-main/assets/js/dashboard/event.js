$(function () {
    $('#eventadvert_form_channel').on('change', function () {
        console.log('change');
        $('#eventadvert_form_category').val('');
        $('#eventadvert_form_subCategory').val('');
        setParent();
    });

    $('#eventadvert_form_category').on('change', function () {
        $('#eventadvert_form_subCategory').val('');
        setParent();
    });

    if ($('#eventadvert_form_address').length > 0) {
        $('#other_address').prop('checked', true);
        $('.address').removeClass('d-none');
    }

    $('.other_address').on('click', function () {
        if ($('.address').hasClass('d-none')) {
            $('.address').removeClass('d-none');
        } else {
            $('.address').addClass('d-none');
            $('#eventadvert_form_address').val('');
            $('#eventadvert_form_housenumber').val('');
            $('#eventadvert_form_box').val('');
            $('#eventadvert_form_geoPlacesId').val('');
            $('.select2-location').html('');
        }
    });

    $('.select2-location').select2({
        theme: "bootstrap",
        placeholder: 'Zipcode & city',
        minimumInputLength: 2,
        multiple: false,
        ajax: {
            url: '/ajax/city',
            dataType: 'json'
        }
    });

    $('.select2-location').on('select2:select', function (e) {
        var data = e.params.data;
        $('#eventadvert_form_geoPlacesId').val(data.id);
    });

    $('.select2-tags').select2({
        theme: "bootstrap",
        placeholder: 'Tags',
        minimumInputLength: 2,
        maximumSelectionLength: 10,
        multiple: true,
        tags: true,
        ajax: {
            url: '/ajax/tag/',
            dataType: 'json'
        }
    });

    $('.select2-location-company').select2({
        theme: "bootstrap",
        placeholder: 'Zipcode & city',
        minimumInputLength: 2,
        multiple: false,
        ajax: {
            url: '/ajax/city',
            dataType: 'json'
        }
    });

    $('.select2-location-company').on('select2:select', function (e) {
        var data = e.params.data;
        $('#company_form_geoPlacesId').val(data.id);
    });

    if ($('#company_form_geoPlacesId').val() > 0) {
        $.getJSON("/ajax/city/?id=" + $('#company_form_geoPlacesId').val(), function (data) {
            var newOption = new Option(data.text, data.id, true, true);
            $('.select2-location-company').append(newOption).trigger('change');
        });
    }

    if ($('#company_form_geoPlacesId').val() > 0) {
        $.getJSON("/ajax/city/?id=" + $('#eventadvert_form_geoPlacesId').val(), function (data) {
            var newOption = new Option(data.text, data.id, true, true);
            $('.select2-location').append(newOption).trigger('change');
        });
    }



    $('.photo-move').on('click', function () {
        var counter = 0;
        var order = [];
        var url = $(this).data('url');
        var photo = $('#photo-' + $(this).data('id'));
        var photos_q = $('.photo-container > .photo').length;

        if ($(this).data('position') == 'up') {
            photo.prev().insertAfter(photo);
        } else {
            photo.next().insertBefore(photo);
        }

        $('.photo-move').removeClass('d-none');

        $('.photo-container .photo').each(function (i, el) {
            if (i == 0 || photos_q == 1) {
                $(this).find('.photo-move[data-position="up"]').addClass('d-none');
            }
            if ((i + 1) == photos_q) {
                $(this).find('.photo-move[data-position="down"]').addClass('d-none');
            }
            order[counter] = $(this).data('id');
            counter++;
        });

        //setPhotoCols();

        $.ajax({
            type: "POST",
            data: {'order': order},
            url: url,
            success: function (msg) {
            }
        });

        return false;
    });

    $('.photo-del').on('click', function () {
        $.getJSON($(this).data('url') + '?id=' + $(this).data('id'), function (res) {
            if (res.success == true) {
                $('#photo-' + res.id).fadeOut(500, function () {
                    $.when($($('#photo-' + res.id)).remove()).then(function () {
                        var photos_q = $('.photo-container > .photo').length;
                        $('.photo-container > .photo').each(function (i, el) {
                            if (i == 0) {
                                $(this).find('.photo-move[data-position="up"]').addClass('d-none');
                            } else if ((i + 1) == photos_q) {
                                $(this).find('.photo-move[data-position="down"]').addClass('d-none');
                            }
                        });
                    });
                    //setPhotoCols();
                });
            }
        });


        return false;
    });

    $('#all_day_event').on('change', function () {
        $('#date_hour_bloc').toggleClass('d-none');
    });

    $('#premium_eventadvert_form_redirection_type').on('change', setBigPremiumLink);
    $(window).on('load', setBigPremiumLink);

    $('#premium_eventadvert').on('change', function() {
        let advert = $(this).val();
        if ( $('#premium_eventadvert_form_redirection_type').val() == 1 ) {
            $('#premium_eventadvert_form_redirection_link').val(advert);
        }
    });
});

function setParent() {
    var has_data = 0;
    var selected = $('#eventadvert_form_channel').val();

    $('#eventadvert_form_category').prop('disabled', false);

    $('#eventadvert_form_category > option').addClass('d-none');

    $('#eventadvert_form_category').find('option').each(function (e) {
        if (selected == $(this).data('channel')) {
            $(this).removeClass('d-none');
        }
    });
    var selectedCategory = $('#eventadvert_form_category option:selected').text();
    console.log('adding noe to sub cat options')
    $('#eventadvert_form_subCategory > option').addClass('d-none');
    console.log(selectedCategory)
    $('#eventadvert_form_subCategory').find('option').each(function (e) {
        if (selectedCategory == $(this).data('category')) {
            $(this).removeClass('d-none');
        }
    });
}

setParent();

function setBigPremiumLink() {
    let type = $('#premium_eventadvert_form_redirection_type').val();
    let eventAdvert_field = $('#eventadvert_field');
    let premium_link_field = $('#premium_website_link');

    eventAdvert_field.removeClass('d-none');
    eventAdvert_field.removeClass('d-block');
    premium_link_field.removeClass('d-none');
    premium_link_field.removeClass('d-block');

    // $('#premium_eventadvert_form_redirection_link').val('');

    if ( type == 0 ) {        
        eventAdvert_field.addClass('d-none');
        premium_link_field.addClass('d-block');
    } else {
        eventAdvert_field.addClass('d-block');
        premium_link_field.addClass('d-none');
        $('#premium_eventadvert_form_redirection_link').val($('#premium_eventadvert').val());
    }
}

/* can't work
$( "img" )
    .error(function() {
        $( this ).attr( "src", "replacement.png" );
    })
    .attr( "src", "missing.png" );
 */