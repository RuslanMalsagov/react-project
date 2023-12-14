import { render } from 'react-dom';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvaider } from 'app/providers/themeProvider';

import './shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ThemeProvaider>
      <App />
    </ThemeProvaider>
  </BrowserRouter>,
  document.getElementById('root')
);
