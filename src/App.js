import { Route, Routes} from 'react-router-dom';
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
     <Route path='./Contact' element= {<Contact />} />
      <Route path='./Serves' element={<Serves />}/>
    <Route path='./Blog' element={<Blog/>} />
</Routes>    
      <Footer />


    </div>
  );
}

export default App;
