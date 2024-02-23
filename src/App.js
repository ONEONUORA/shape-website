import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import GALLERY from './components/gallery';
import PRICING from './components/pricing';
import CONTACT from './components/contact';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Services" element={<Services/>}/>
            <Route path="/GALLERY" element={<GALLERY/>}/>
            <Route path="/PRICING" element={<PRICING/>}/>
            <Route path="/CONTACT" element={<CONTACT/>}/>



        </Routes>
      
    </div>
  );
}

export default App;
