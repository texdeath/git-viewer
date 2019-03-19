import webpack from 'webpack';
import path from 'path';
require('dotenv').config();

const srcPath = path.join(__dirname, '../', '../', '/src');
const distPath = path.join(__dirname, '../', '../', '/dist');

export default (port: number): webpack.Configuration => ({
  entry: {
    main: [
      '@babel/polyfill',
      'webpack-hot-middleware/client?reload=true',
      'react-hot-loader/patch',
      `${srcPath}/index.tsx`
    ]
  },
  mode: 'development',
  output: {
    filename: 'js/bundle.js',
    path: distPath,
    publicPath: `http://localhost:${port}/`
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, '..', '..', 'src/components/'),
      '@containers': path.resolve(__dirname, '..', '..', 'src/containers/'),
      '@pages': path.resolve(__dirname, '..', '..', 'src/pages/'),
      '@reducers': path.resolve(__dirname, '..', '..', 'src/reducers/'),
      '@sagas': path.resolve(__dirname, '..', '..', 'src/sagas/'),
      '@services': path.resolve(__dirname, '..', '..', 'src/services/'),
      '@assets': path.resolve(__dirname, '..', '..', 'src/assets/')
    },
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': { 
        NODE_ENV: JSON.stringify('development'),
        PERSONAL_ACCESS_TOKEN: JSON.stringify(process.env.PERSONAL_ACCESS_TOKEN),
       }
    })
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 8192, name: 'images/[name].[ext]' }
          },
          {
            loader: 'img-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.svg$/,
        include: srcPath,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'svg/[name].[ext]',
              mimetype: 'image/svg+xml'
            }
          },
          {
            loader: 'img-loader'
          }
        ]
      },
      {
        test: /\.svg(\?[\s\S]+)?$/,
        exclude: srcPath,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'fonts/[name].[ext]',
              mimetype: 'image/svg+xml'
            }
          }
        ]
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 8192, name: 'fonts/[name].[ext]' }
          }
        ]
      }
    ]
  }
});
