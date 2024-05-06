window.markAsRead = function (notification, notificationId) {
    let parentElement = $(notification).parent();

    $.post(markAsReadLocation, {notificationId: notificationId})
        .done(function (data) {
            parentElement.fadeOut();
        });
}