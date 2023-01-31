var webpack = require("webpack");

  module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
      rules: [
        {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            },
        },
        }, {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          use: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          use: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          use: "url-loader?limit=10000&mimetype=application/octet-stream"
        }, {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          use: "file-loader"
        }, {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          use: "url-loader?limit=10000&mimetype=image/svg+xml"
        }
      ]
    },
    resolve: {
      alias: {
       FroalaEditor: 'file_name'
      },
      fallback: {
        "crypto": require.resolve("crypto-browserify"),
        "buffer": require.resolve("buffer"),
        "stream": require.resolve("stream-browserify")
      },
      modules: ['../node_modules/froala-editor/js','node_modules']
    },
    plugins: [
      new webpack.ProvidePlugin({
         FroalaEditor: 'file_name'
      })
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    }
  };