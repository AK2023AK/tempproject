import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';
import Pagenotfound from './Pagenotfound';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard/:user' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path ='*' element={<Pagenotfound />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
