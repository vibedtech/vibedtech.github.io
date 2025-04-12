// src/App.tsx
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import LandingPage from './pages/LandingPage'; // Renamed index.tsx for clarity
// import Footer from './components/Footer'; // Add later

function App() {
  return (
    <Box>
      <Header />
      <LandingPage />
    </Box>
  );
}

export default App;
