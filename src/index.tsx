import { render } from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvaider from './theme/ThemeProvaider';

render(
  <BrowserRouter>
    <ThemeProvaider>
      <App />
    </ThemeProvaider>
  </BrowserRouter>,
  document.getElementById('root')
);
