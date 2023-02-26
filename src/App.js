
import './App.css';
import Blog from './components/Blog';
import Contact from './components/Contact';
import About from './components/About';

import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Serves from './components/Serves';
function App() {
  return (
    <div className="App">
      <Homepage />
      <Navbar />
      <About />
      <Contact />
      <Serves />
      <Blog />
    </div>
  );
}

export default App;
