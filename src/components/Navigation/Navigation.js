import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink
        className={({ isActive }) =>
          `${css['header__link']}  ${isActive ? css['active'] : ''}`
        }
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={({ isActive }) =>
          `${css['header__link']}  ${isActive ? css['active'] : ''}`
        } to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
