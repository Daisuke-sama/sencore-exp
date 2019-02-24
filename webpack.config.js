var Encore = require('@symfony/webpack-encore');
const CopyWebpackConfig = require('copy-webpack-plugin');

Encore
    // the project directory where all compiled assets will be stored
    .setOutputPath('public/build')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    .autoProvidejQuery()

    .addEntry('rep_log', './assets/js/rep_log.js')
    .addEntry('login', './assets/js/login.js')
    .addEntry('layout', './assets/js/layout.js')

    .addPlugin(new CopyWebpackConfig([
        // copies to {output}/static
        {from: './assets/static', to: 'static'}
    ]))

    .enableBuildNotifications()
;

// exports the final config
module.exports = Encore.getWebpackConfig();
console.log(module.exports);
