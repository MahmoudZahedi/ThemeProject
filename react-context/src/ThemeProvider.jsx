// Import React and the ThemeProvider

import { ThemeProvider } from './ThemeContext';
import Main from './Main'; // Your main app component

// App component wrapped with ThemeProvider
const App = () => (
  <ThemeProvider>
    <Main />
  </ThemeProvider>
);

// Export the App component
export default App;
