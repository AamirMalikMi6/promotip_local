import {Calendar} from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import nl from '@fullcalendar/core/locales/nl';

import '@fullcalendar/common/main.min.css';
import 'bootstrap/'


document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    if (calendarEl) {
        console.log(eventUrl);

        var calendar = new Calendar(calendarEl, {
            plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin, bootstrapPlugin],
            themeSystem: 'bootstrap4',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            firstDay: 1,
            locale: nl,
            nowIndicator: true,
            weekends: true,
            dayMaxEvents: true, // allow "more" link when too many events
            eventSources: [
                {
                    url: window.eventUrl,
                    method: 'POST',
                }
            ]
        });
        calendar.render();
    }

});

