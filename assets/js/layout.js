'use strict';

import $ from 'jquery';
global.$ = $;
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import '../css/main.scss';
import 'font-awesome/css/font-awesome.css';

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
