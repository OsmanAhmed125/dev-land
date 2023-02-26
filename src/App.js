import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import './App.css';
import Blog from './components/blog';
import Contact from './components/contact';

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
