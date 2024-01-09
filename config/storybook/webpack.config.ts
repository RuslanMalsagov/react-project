import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('ts', 'tsx');
  config.module?.rules?.push(buildCssLoader(true));

  // eslint-disable-next-line no-param-reassign
  config.module!.rules = config.module?.rules?.map((rule) => {
    if (rule === '...') {
      return rule;
    }

    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  // eslint-disable-next-line no-param-reassign
  config.module!.rules?.push({
    test: [/\.svg$/],
    use: ['@svgr/webpack'],
  });

  return config;
};