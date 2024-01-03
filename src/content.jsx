import React, { useContext } from 'react';
import { ThemeContext } from './themeprovider';

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ color: theme === 'light' ? '#333' : '#fff', padding: '20px' }}>
      <p>Цвет текста зависит от текущей темы.</p>
    </div>
  );
};

export default Content;