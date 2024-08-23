import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/aboutPage';
import ContactPage from './pages/contactPage';
import HomePage from './pages/homePage';
import PortfolioPage from './pages/portfolioPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/contact' element={<ContactPage /> } />
      </Routes>
    </Router>
  );
}

export default App;
