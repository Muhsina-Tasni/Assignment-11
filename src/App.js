import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import './App.css';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
