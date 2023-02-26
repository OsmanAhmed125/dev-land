
import './App.css';
import Blog from './components/blog';
import Contact from './components/contact';

import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Serves from './components/serves';
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
