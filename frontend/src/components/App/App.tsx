import React from 'react';
import './App.css';
import { ThemeProvider } from 'theme-ui';
import theme from '../../theme/index';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <h1>Template</h1>
      </div>
    </ThemeProvider>
  );
};

export default App;
