var Encore = require('@symfony/webpack-encore');

Encore
    // the project directory where all compiled assets will be stored
    .setOutputPath('public/build')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    .autoProvidejQuery()

    .addEntry('rep_log', './public/assets/js/rep_log.js')
    .addEntry('login', './public/assets/js/login.js')
    .addEntry('layout', './public/assets/js/layout.js')

    .enableBuildNotifications()
;

// exports the final config
module.exports = Encore.getWebpackConfig();
