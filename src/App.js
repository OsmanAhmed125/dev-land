import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import './App.css';
import Blog from './components/Blog';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';

import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Serves from './components/Serves';
function App() {
  return (
    <div className="App">
      <Navbar />
<Routes>
<Route path='/' element= {<Homepage />}/>
    <Route path='/About' element={<About/>} />
     
    
</Routes>
<Contact />
      <Serves />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
