import webpack from 'webpack';
import path from 'path';

const srcPath = path.join(__dirname, '../', '../', '/src');
const distPath = path.join(__dirname, '../', '../', '/dist');

export default {
  entry: {
    main: [`${srcPath}/index.tsx`]
  },
  mode: 'production',
  output: {
    filename: 'js/bundle.js',
    path: distPath,
    publicPath: '/'
  },
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
    new webpack.DefinePlugin({
      'process.env': { 
        NODE_ENV: JSON.stringify('production'),
        // TODO
        PERSONAL_ACCESS_TOKEN: JSON.stringify(process.env.PERSONAL_ACCESS_TOKEN),
       }
    })
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]'
            }
          },
          {
            loader: 'img-loader'
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
              name: 'assets/[name].[ext]',
              mimetype: 'image/svg+xml'
            }
          },
          {
            loader: 'img-loader'
          }
        ]
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 8192, name: 'assets/[name].[ext]' }
          }
        ]
      }
    ]
  }
};
