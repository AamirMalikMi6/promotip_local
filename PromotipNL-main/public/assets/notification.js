(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification"],{

/***/ "./assets/js/dashboard/notification.js":
/*!*********************************************!*\
  !*** ./assets/js/dashboard/notification.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {window.markAsRead = function (notification, notificationId) {
  var parentElement = $(notification).parent();
  $.post(markAsReadLocation, {
    notificationId: notificationId
  }).done(function (data) {
    parentElement.fadeOut();
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/dashboard/notification.js","runtime","vendors~admin~app~dashboard~dashboard_company~dashboard_events~dropzone~fullcalendar~notification~photoswipe"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZGFzaGJvYXJkL25vdGlmaWNhdGlvbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJtYXJrQXNSZWFkIiwibm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uSWQiLCJwYXJlbnRFbGVtZW50IiwiJCIsInBhcmVudCIsInBvc3QiLCJtYXJrQXNSZWFkTG9jYXRpb24iLCJkb25lIiwiZGF0YSIsImZhZGVPdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBQSwrQ0FBTSxDQUFDQyxVQUFQLEdBQW9CLFVBQVVDLFlBQVYsRUFBd0JDLGNBQXhCLEVBQXdDO0FBQ3hELE1BQUlDLGFBQWEsR0FBR0MsQ0FBQyxDQUFDSCxZQUFELENBQUQsQ0FBZ0JJLE1BQWhCLEVBQXBCO0FBRUFELEdBQUMsQ0FBQ0UsSUFBRixDQUFPQyxrQkFBUCxFQUEyQjtBQUFDTCxrQkFBYyxFQUFFQTtBQUFqQixHQUEzQixFQUNLTSxJQURMLENBQ1UsVUFBVUMsSUFBVixFQUFnQjtBQUNsQk4saUJBQWEsQ0FBQ08sT0FBZDtBQUNILEdBSEw7QUFJSCxDQVBELEMiLCJmaWxlIjoibm90aWZpY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93Lm1hcmtBc1JlYWQgPSBmdW5jdGlvbiAobm90aWZpY2F0aW9uLCBub3RpZmljYXRpb25JZCkge1xyXG4gICAgbGV0IHBhcmVudEVsZW1lbnQgPSAkKG5vdGlmaWNhdGlvbikucGFyZW50KCk7XHJcblxyXG4gICAgJC5wb3N0KG1hcmtBc1JlYWRMb2NhdGlvbiwge25vdGlmaWNhdGlvbklkOiBub3RpZmljYXRpb25JZH0pXHJcbiAgICAgICAgLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgcGFyZW50RWxlbWVudC5mYWRlT3V0KCk7XHJcbiAgICAgICAgfSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9