var webpack = require('webpack');

module.exports = {
    entry: {
        vendor: ['marked', 'jquery'],
    },
    output: {
        path: __dirname + '/public/javascripts',
        filename: '[name].bundle.js',
    },
    module: {
        rules: [{
            test: require.resolve('jquery'),
            use: [{
                loader: 'expose-loader',
                options: '$',
            }]
        },
        {
            test: require.resolve('marked'),
            use: [{
                loader: 'expose-loader',
                options: 'marked',
            }]
        }]
    },
};