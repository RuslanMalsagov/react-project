import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to={'/'}>
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
          About
        </AppLink>
      </div>
    </div>
  );
};
