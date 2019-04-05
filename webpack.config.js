var webpack = require('webpack');

module.exports = {
    entry: {
        vendor: ['marked'],
    },
    output: {
        path: __dirname + '/public/javascripts',
        filename: '[name].bundle.js',
    },
};