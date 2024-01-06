import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
  return {
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
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };
}
