'use strict';

const $ = require('jquery');
global.$ = $;
require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');
require('../css/main.css');
require('font-awesome/css/font-awesome.css');

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
