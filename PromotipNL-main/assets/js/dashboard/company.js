$(function () {
    Dropzone.autoDiscover = false;
    $('.add-hours').on('click', function () {
        var day = $(this).data('day');
        $('.day-' + day).removeClass('d-none');

        $(this).addClass('d-none');

        return false;
    });

    $('.remove-hours').on('click', function () {
        var day = $(this).data('day');
        $('.day-' + day).addClass('d-none');

        $('.add-hours[data-day="' + day + '"]').removeClass('d-none');
        $('select[name="openingHour[' + day + '][from][1]"').val('');
        $('select[name="openingHour[' + day + '][till][1]"').val('');

        return false;
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
        $('#company_form_geoPlacesId').val(data.id);
    });

    if ($('#company_form_geoPlacesId').val() > 0) {
        $.getJSON("/ajax/city/?id=" + $('#company_form_geoPlacesId').val(), function (data) {
            var newOption = new Option(data.text, data.id, true, true);
            $('.select2-location').append(newOption).trigger('change');
        });
    }

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

    //setPhotoCols();

    $('#dropzone').dropzone({
        paramName: "file",
        maxFiles: 20,
        addRemoveLinks: true,
        previewTemplate: '<div class="dz-preview dz-file-preview">\n' +
            '  <div class="dz-details">\n' +
            '    <img data-dz-thumbnail />\n' +
            '  </div>\n' +
            '  <div class="dz-progress d-none"><span class="dz-upload" data-dz-uploadprogress></span></div>\n' +
            '  <div class="dz-success-mark d-none"><span>✔</span></div>\n' +
            '  <div class="dz-error-mark d-none"><span>✘</span></div>\n' +
            '  <div class="dz-error-message d-none"><span data-dz-errormessage></span></div>\n' +
            '</div>',
        init: function () {
            this.on("success", function (file, response) {
                this.removeFile(file);

                $.get($('#dropzone').data('ph') + '?temp=' + response.temporaryId, function (data) {
                    $.when(addUpload(data)).then(function () {
                        $('.photo-move').removeClass('d-none');
                        var photos_q = $('.photo-container').length;
                        $('.photo-container').each(function (i, el) {
                            if (i == 0 || photos_q == 1) {
                                $(this).find('.photo-move[data-position="up"]').addClass('d-none');
                            }
                            if ((i + 1) == photos_q) {
                                $(this).find('.photo-move[data-position="down"]').addClass('d-none');
                            }
                        });
                        photoEvents();
                        //setPhotoCols();
                    });
                });

            });
        }
    });

    photoEvents();
});

function addUpload(data) {
    if ($('.photo-container').length == 0) {
        $('#dropzone').parent().append(data);
    } else {
        $('.photo-container').parent().append(data);
    }
}

function setPhotoCols() {
    $('.photo-container > .photo').each(function (i, el) {
        if (i == 0) {
            $(this).addClass('col-12').removeClass('col-6');
        } else {
            $(this).addClass('col-6').removeClass('col-12');
        }
    });
}

function photoEvents() {
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

        $('.photo-container').each(function (i, el) {
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
}

