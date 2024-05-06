$(function () {
    'use strict';

    $('#paymentForm').on('submit', function(e) {
        e.preventDefault();

        let payment_option = $('input[name="payment_duration"]:checked').val();
        if ( !payment_option ) {
            alert('Please select an option for the duration of your premium advert');
        } else {
            $.ajax({
                type: 'POST',
                dataType: 'json',
                url: '/payment/generate',
                data: {
                    _token: $('input[name="token"]').val(),
                    payment_plan: $('input[name="payment_duration"]:checked').val(),
                    advert: $('input[name="entity"]').val(),
                    advert_name: $('input[name="entity_name"]').val()
                },
                success: function (data) {
                    if(data.uri) {
                        window.location = data.uri;
                    }
                },
                error: function(data) {  
                   console.log(data.error);
                }
            });
        }
    });
});