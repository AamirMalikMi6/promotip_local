/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

import '../css/bootstrap/bootstrap.css';

require('@fortawesome/fontawesome-free/css/all.css');
import '../css/app.css';
import '../css/app_xs.css';
import '../css/app_sm.css';
import '../css/app_md.css';
import '../css/app_lg.css';
import '../css/cookiebubble/cookieBubble.css';
import '../css/fullcalendar/fullcalendar.css';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
import $ from 'jquery';

window.$ = $;

require('@fortawesome/fontawesome-free/js/all.js');

// vendor
import './bootstrap/bootstrap.bundle.js';
import './cookiebubble/cookieBubble.js';

// Air Datepicker
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

window.AirDatepicker = AirDatepicker;

import localeEn from 'air-datepicker/locale/en';
import localeNl from 'air-datepicker/locale/nl';

window.localeEn = localeEn;
window.localeNl = localeNl;

// custom
import './app/app.js';

import './photoswipe/photoswipe.js';