'use strict';

const $ = require('jquery');
global.$ = $;
require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap-sass/assets/stylesheets/_bootstrap.scss');
require('../css/main.scss');
require('font-awesome/css/font-awesome.css');

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
