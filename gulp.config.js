module.exports = function() {

    var client = './src/client/';
    var clientApp = client + 'app/';
    var temp = './.tmp/';

    var config = {

        temp: temp,

        /**
         * Files paths
         */
        alljs: [
            './src/**/*.js',
            './*.js'
        ],

        build: './build/',

        client: client,

        css: temp + 'styles.css',

        fonts: './bower_components/font-awesome/fonts/**/*.*',

        htmltemplates: clientApp + '**/*.html',

        images: client + 'images/**/*.*',

        index: client + 'index.html',

        js: [
          clientApp + '**/*.module.js',
          clientApp + '**/*.js',
          '!' + clientApp + '**/*.spec.js',
        ],

        less: client + 'styles/styles.less',

        templateCache: {
            file: 'templates.js',
            options: {
                module: 'app.core',
                standAlone: false,
                root: 'app/'
            }
        },

        /**
         * Bower and NPM locations
         */
        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        }
    };

    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };

    return config;
};
