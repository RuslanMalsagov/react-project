import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '../Button/Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = (props) => {
  const { className } = props;
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  // t('Язык') = 'Язык' - это всего лишь ключ, а значение задается в файлк tanslation.json
  return (
    <div>
      <Button className={classNames(cls.langSwitcher, {}, [className])} theme={ThemeButton.CLEAR} onClick={toggle}>
        {t('Язык')}
      </Button>
    </div>
  );
};
