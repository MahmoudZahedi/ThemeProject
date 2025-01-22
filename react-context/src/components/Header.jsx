import{ useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      style={{
        background: theme === 'dark' ? '#333' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
        padding: '10px',
        textAlign: 'center',
      }}
    >
      <h1>Theme Manager</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
};

export default Header;
