const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, 'js/dashboard_main.js'),
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 8564,
    open: true,
  },
  module: {
    rules: [
      {
	test: /\.css$/i,
	use: ['style-loader', 'css-loader'],
      },
      {
	test: /\.(png|jpg|jpeg|gif)$/i,
	type: 'asset/resource',
	use: [
	  {
	    loader: 'image-webpack-loader',
	    options: {
	      disable: process.env.NODE_ENV === 'development',
	      mozjpeg: {
		progressive: true,
		quality: 65,
	      },
	      optipng: {
		enabled: false,
	      },
	      pngquant: {
		qaulity: [0.65, 0.9],
		speed: 4,
	      },
	      gifsicle: {
		interlaced: false,
	      },
	      webp: {
		quality: 75,
	      },
	    },
	  },
	],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
	<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Holberton Dashboard</title>
          </head>
          <body>
          </body>
        </html>
      `,
      filename: 'index.html',
    }),
  ],	
};
