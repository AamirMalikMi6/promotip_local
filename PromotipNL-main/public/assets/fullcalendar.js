(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fullcalendar"],{

/***/ "./assets/js/fullcalendar.js":
/*!***********************************!*\
  !*** ./assets/js/fullcalendar.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/main.js");
/* harmony import */ var _fullcalendar_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/bootstrap */ "./node_modules/@fullcalendar/bootstrap/main.js");
/* harmony import */ var _fullcalendar_core_locales_nl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/core/locales/nl */ "./node_modules/@fullcalendar/core/locales/nl.js");
/* harmony import */ var _fullcalendar_core_locales_nl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_core_locales_nl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fullcalendar_common_main_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/common/main.min.css */ "./node_modules/@fullcalendar/common/main.min.css");
/* harmony import */ var _fullcalendar_common_main_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_common_main_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bootstrap___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap/ */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap___WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap___WEBPACK_IMPORTED_MODULE_8__);









document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  if (calendarEl) {
    console.log(eventUrl);
    var calendar = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Calendar"](calendarEl, {
      plugins: [_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_1__["default"], _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_4__["default"], _fullcalendar_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"]],
      themeSystem: 'bootstrap4',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      firstDay: 1,
      locale: _fullcalendar_core_locales_nl__WEBPACK_IMPORTED_MODULE_6___default.a,
      nowIndicator: true,
      weekends: true,
      dayMaxEvents: true,
      // allow "more" link when too many events
      eventSources: [{
        url: window.eventUrl,
        method: 'POST'
      }]
    });
    calendar.render();
  }
});

/***/ })

},[["./assets/js/fullcalendar.js","runtime","vendors~admin~app~dashboard~dashboard_company~dashboard_events~dropzone~fullcalendar~notification~photoswipe","vendors~fullcalendar"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVsbGNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbGVuZGFyRWwiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJldmVudFVybCIsImNhbGVuZGFyIiwiQ2FsZW5kYXIiLCJwbHVnaW5zIiwiaW50ZXJhY3Rpb25QbHVnaW4iLCJkYXlHcmlkUGx1Z2luIiwidGltZUdyaWRQbHVnaW4iLCJsaXN0UGx1Z2luIiwiYm9vdHN0cmFwUGx1Z2luIiwidGhlbWVTeXN0ZW0iLCJoZWFkZXJUb29sYmFyIiwibGVmdCIsImNlbnRlciIsInJpZ2h0IiwiZmlyc3REYXkiLCJsb2NhbGUiLCJubCIsIm5vd0luZGljYXRvciIsIndlZWtlbmRzIiwiZGF5TWF4RXZlbnRzIiwiZXZlbnRTb3VyY2VzIiwidXJsIiwid2luZG93IiwibWV0aG9kIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUN0RCxNQUFJQyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixVQUF4QixDQUFqQjs7QUFFQSxNQUFJRCxVQUFKLEVBQWdCO0FBQ1pFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaO0FBRUEsUUFBSUMsUUFBUSxHQUFHLElBQUlDLDJEQUFKLENBQWFOLFVBQWIsRUFBeUI7QUFDcENPLGFBQU8sRUFBRSxDQUFDQyxpRUFBRCxFQUFvQkMsNkRBQXBCLEVBQW1DQyw4REFBbkMsRUFBbURDLDBEQUFuRCxFQUErREMsK0RBQS9ELENBRDJCO0FBRXBDQyxpQkFBVyxFQUFFLFlBRnVCO0FBR3BDQyxtQkFBYSxFQUFFO0FBQ1hDLFlBQUksRUFBRSxpQkFESztBQUVYQyxjQUFNLEVBQUUsT0FGRztBQUdYQyxhQUFLLEVBQUU7QUFISSxPQUhxQjtBQVFwQ0MsY0FBUSxFQUFFLENBUjBCO0FBU3BDQyxZQUFNLEVBQUVDLG9FQVQ0QjtBQVVwQ0Msa0JBQVksRUFBRSxJQVZzQjtBQVdwQ0MsY0FBUSxFQUFFLElBWDBCO0FBWXBDQyxrQkFBWSxFQUFFLElBWnNCO0FBWWhCO0FBQ3BCQyxrQkFBWSxFQUFFLENBQ1Y7QUFDSUMsV0FBRyxFQUFFQyxNQUFNLENBQUN0QixRQURoQjtBQUVJdUIsY0FBTSxFQUFFO0FBRlosT0FEVTtBQWJzQixLQUF6QixDQUFmO0FBb0JBdEIsWUFBUSxDQUFDdUIsTUFBVDtBQUNIO0FBRUosQ0E3QkQsRSIsImZpbGUiOiJmdWxsY2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NhbGVuZGFyfSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUnO1xyXG5pbXBvcnQgaW50ZXJhY3Rpb25QbHVnaW4gZnJvbSAnQGZ1bGxjYWxlbmRhci9pbnRlcmFjdGlvbic7XHJcbmltcG9ydCBkYXlHcmlkUGx1Z2luIGZyb20gJ0BmdWxsY2FsZW5kYXIvZGF5Z3JpZCc7XHJcbmltcG9ydCB0aW1lR3JpZFBsdWdpbiBmcm9tICdAZnVsbGNhbGVuZGFyL3RpbWVncmlkJztcclxuaW1wb3J0IGxpc3RQbHVnaW4gZnJvbSAnQGZ1bGxjYWxlbmRhci9saXN0JztcclxuaW1wb3J0IGJvb3RzdHJhcFBsdWdpbiBmcm9tICdAZnVsbGNhbGVuZGFyL2Jvb3RzdHJhcCc7XHJcbmltcG9ydCBubCBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvbG9jYWxlcy9ubCc7XHJcblxyXG5pbXBvcnQgJ0BmdWxsY2FsZW5kYXIvY29tbW9uL21haW4ubWluLmNzcyc7XHJcbmltcG9ydCAnYm9vdHN0cmFwLydcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGNhbGVuZGFyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FsZW5kYXInKTtcclxuXHJcbiAgICBpZiAoY2FsZW5kYXJFbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50VXJsKTtcclxuXHJcbiAgICAgICAgdmFyIGNhbGVuZGFyID0gbmV3IENhbGVuZGFyKGNhbGVuZGFyRWwsIHtcclxuICAgICAgICAgICAgcGx1Z2luczogW2ludGVyYWN0aW9uUGx1Z2luLCBkYXlHcmlkUGx1Z2luLCB0aW1lR3JpZFBsdWdpbiwgbGlzdFBsdWdpbiwgYm9vdHN0cmFwUGx1Z2luXSxcclxuICAgICAgICAgICAgdGhlbWVTeXN0ZW06ICdib290c3RyYXA0JyxcclxuICAgICAgICAgICAgaGVhZGVyVG9vbGJhcjoge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogJ3ByZXYsbmV4dCB0b2RheScsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXI6ICd0aXRsZScsXHJcbiAgICAgICAgICAgICAgICByaWdodDogJ2RheUdyaWRNb250aCx0aW1lR3JpZFdlZWssdGltZUdyaWREYXknXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpcnN0RGF5OiAxLFxyXG4gICAgICAgICAgICBsb2NhbGU6IG5sLFxyXG4gICAgICAgICAgICBub3dJbmRpY2F0b3I6IHRydWUsXHJcbiAgICAgICAgICAgIHdlZWtlbmRzOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXlNYXhFdmVudHM6IHRydWUsIC8vIGFsbG93IFwibW9yZVwiIGxpbmsgd2hlbiB0b28gbWFueSBldmVudHNcclxuICAgICAgICAgICAgZXZlbnRTb3VyY2VzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB3aW5kb3cuZXZlbnRVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjYWxlbmRhci5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==