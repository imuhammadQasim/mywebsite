import './App.css';
import "./index.css";
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<><h1 className='text-3xl font-bold underline p-5'>Contact us</h1></>} />
        <Route path="/portfolio" element={<><h1 className='text-3xl font-bold underline p-5'>Our Portfolio</h1></>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
