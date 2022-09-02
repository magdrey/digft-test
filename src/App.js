import {useState} from "react";
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import BusinessPage from './components/businesspage/BusinessPage';

function App({}) {


  const [theme, setTheme] = useState(true);


    const toggletheme = () => setTheme(!theme);
 
 


 




  return (
    <div   className={` ${theme ? ' light-theme' : 'dark-theme'}    App `}  >
      <Navbar toggletheme = {toggletheme} />
      <Routes>
      <Route exact path="/" element={<Home />} />
        <Route exact path="/Business/" element={<BusinessPage />} />
    
      </Routes>
      
      
      <Footer />
    </div>
  );
}

export default App;
