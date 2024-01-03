import React, { createContext, useContext, useState } from 'react';
import ThemeProvider from './themeprovider';
import Header from './header';
import Content from './content';

export const ThemeContext = createContext();

const App = () => {
  return (
  
    <ThemeProvider>
      <div>
        <Header />
        <Content />
      </div>
    </ThemeProvider>
  );
};

export default App;
