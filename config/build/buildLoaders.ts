import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            // Auto - что бы имена классов генерировались только для молульных стилей
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            /*
          В режиме разработки имена классов будут создавать по шаблону path][name]__[local
          то есть будет указываться путь до файла, а в режиме разработки будет 
          генерироваться только 
          */
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  // Если не используем TSX нужен - babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    // лоадеры предназначены для обработки файлов которые выходят за рамки JS
    typescriptLoader,
    cssLoader,
  ];
}
