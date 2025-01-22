import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Main = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      style={{
        background: theme === 'dark' ? '#222' : '#fff',
        color: theme === 'dark' ? '#ddd' : '#000',
        minHeight: 'calc(100vh - 160px)',
        padding: '20px',
      }}
    >
      <h2>Current Theme is  <strong>{theme}</strong> Mode </h2>
   
    </main>
  );
};

export default Main;
