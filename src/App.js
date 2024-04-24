import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Aboutus from './components/about';
import Services from './components/services';
import GALLERY from './components/gallery';
import PRICING from './components/pricing';
import CONTACT from './components/contact';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path="/about" element={<Aboutus/>}/>
            <Route path="/Services" element={<Services/>}/>
            <Route path="/GALLERY" element={<GALLERY/>}/>
            <Route path="/PRICING" element={<PRICING/>}/>
            <Route path="/CONTACT" element={<CONTACT/>}/>
        </Routes>
        <Footer/>
      
    </div>
  );
}

export default App;
