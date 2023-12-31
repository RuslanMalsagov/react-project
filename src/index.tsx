import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvaider } from 'app/providers/themeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import App from './app/App';

import './shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvaider>
        <App />
      </ThemeProvaider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);
