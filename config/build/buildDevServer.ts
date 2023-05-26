import { BuildOptions } from './types/config';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,

    // свойство open автоматически открывает в браузере страницу с нашим приложением
    open: true,

    // historyApiFallback исправляет ошибку девсервера
    // без этой команды при обновлении страницы не на главной странице приводит к ошибке
    historyApiFallback: true,
  };
}
