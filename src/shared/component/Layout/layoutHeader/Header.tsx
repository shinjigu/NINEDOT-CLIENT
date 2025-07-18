import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import * as styles from './Header.css';

import { PATH } from '@/route/path';
import IcLogo from '@/assets/svg/IcLogo';

const MENUS = [
  { label: '나의 할 일', path: PATH.TODO },
  { label: '나의 만다라트', path: PATH.MANDAL },
  { label: '나의 히스토리', path: PATH.HISTORY },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const findActiveMenu = MENUS.find((menu) => location.pathname.startsWith(menu.path));
  const initialMenu = findActiveMenu ? findActiveMenu.label : '';

  const [activeMenu, setActiveMenu] = useState<string>(initialMenu);

  const handleMenuClick = (menuLabel: string, path: string) => {
    setActiveMenu(menuLabel);
    navigate(path);
  };

  const renderNavMenu = () => (
    <>
      <nav className={styles.navWrapper}>
        {MENUS.map((menu) => {
          const isActive = activeMenu === menu.label;
          const buttonClass = `${styles.navItem} ${isActive ? styles.navItemActive : ''}`;

          return (
            <button
              key={menu.label}
              className={buttonClass}
              onClick={() => handleMenuClick(menu.label, menu.path)}
              aria-current={isActive ? 'page' : undefined}
            >
              {menu.label}
            </button>
          );
        })}
      </nav>
    </>
  );

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link to={PATH.ROOT}>
          <IcLogo className={styles.logoImage} />
        </Link>

        {renderNavMenu()}
      </div>
    </header>
  );
};
export default Header;
