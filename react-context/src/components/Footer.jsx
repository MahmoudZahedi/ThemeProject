import  { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      style={{
        background: theme === 'dark' ? '#333' : '#f1f1f1',
        color: theme === 'dark' ? '#fff' : '#000',
        padding: '10px',
        textAlign: 'center',
      }}
    >
      <p>© 2025 | Theme Manager</p>
    </footer>
  );
};

export default Footer;
