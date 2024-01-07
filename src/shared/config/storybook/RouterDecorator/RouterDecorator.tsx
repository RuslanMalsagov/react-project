import { Story } from '@storybook/react';
import { BrowserRouter, Router } from 'react-router-dom';

// Роль этого декоратора - добавление в сторисы глобальных стилей
export const RouterDecorator = (story: () => Story) => (
  <BrowserRouter>
    {story()}
  </BrowserRouter>
);
