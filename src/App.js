import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Serves from './components/Serves';
function App() {
  return (
    <div className="App">
      <Navbar />
<Routes>
<Route path='./' element= {<Homepage />}/>
    <Route path='./About'element={<About/>} />
      <Contact />
      <Serves />
      <Blog />
    
</Routes>
      <Footer />
    </div>
  );
}

export default App;
