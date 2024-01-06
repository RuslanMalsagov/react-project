import 'app/styles/index.scss';
import { Story } from '@storybook/react';

// Роль этого декоратора - добавление в сторисы глобальных стилей
export const StyleDecorator = (story: () => Story) => story();
