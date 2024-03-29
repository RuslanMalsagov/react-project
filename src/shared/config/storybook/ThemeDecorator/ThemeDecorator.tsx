import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';

// Роль этого декоратора - добавление в сторисы темы
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
);
