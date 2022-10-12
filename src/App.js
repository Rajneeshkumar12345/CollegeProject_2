import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import Courses from './components/Courses';
import Gallary from './components/Gallary';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Choose from './components/Choose';
import Home from './components/Home';
import Placement from './components/Placement';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Navbar/>
      
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/About" element={<About/>}></Route>
          <Route exact path="/Courses" element={<Courses/>}></Route>
          <Route exact path="/Placement" element={<Placement/>}></Route>
          <Route exact path="/Gallary" element={<Gallary/>}></Route>
          <Route exact path="/Events" element={<Events/>}></Route>
          <Route exact path="/Contact" element={<Contact/>}></Route>
        </Routes>
        <Choose/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
