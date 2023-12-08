import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Link } from 'react-router-dom';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
    </div>
  );
};
