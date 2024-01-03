import React, { useContext } from 'react';
import { ThemeContext } from './themeprovider';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header style={{ background: theme === 'light' ? '#eee' : '#333', padding: '10px' }}>
      <h1>Theme Switcher</h1>
      <button onClick={toggleTheme}>Переключить тему</button>
    </header>
  );
};

export default Header;