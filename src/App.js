import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from './components/About';
import Courses from './components/Courses';
import Gallary from './components/Gallary';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Choose from './components/Choose';
import Home from './components/Home';
import Placement from './components/Placement';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <ScrollToTop>
     <Navbar/>
      
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/About" element={<About/>}></Route>
          <Route exact path="/Courses" element={<Courses/>}></Route>
          <Route exact path="/Placement" element={<Placement/>}></Route>
          <Route exact path="/Gallary" element={<Gallary/>}></Route>
          <Route exact path="/Events" element={<Events/>}></Route>
          <Route exact path="/Contact" element={<Contact/>}></Route>
          <Route exact path="*" element={<Navigate to="/"/>}></Route>
        </Routes>
        {/* <Choose/> */}
        <Footer/>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
