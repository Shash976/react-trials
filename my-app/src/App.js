import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './Home';
import About from './About'; 

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <nav className='nav'>
        <Link to="/" className='nav-item'>Home</Link>
        <Link to="/about" className='nav-item'>About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
