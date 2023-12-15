import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    // Порядок плагинов значения не имеет
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    // с помощью DefinePlugin можно создавать глобальные переменные
    new webpack.DefinePlugin({
      // Присваиваем значение переменной isDev, и она теперь доступна в коде
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ];
}
