import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';
import Pagenotfound from './Pagenotfound';
import Fetch from './Fetch'
import Firebase from './Firebase';
import Create from './Create';
import Edit from './Edit';
import Count from './Count';
import Display from './Display';
import { createContext,useState } from 'react';
export const store = createContext()
function App() {
  const [data,setData] = useState([
    {brandname:'Realme'},
    {brandname:'Redmi'},
    {brandname:'Nokia'}]
    )
  return (
    <store.Provider value={[data,setData]}>
    <>
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard/:user' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path ='*' element={<Pagenotfound />}/>
      </Routes>
    </BrowserRouter> */}
    {/* <Fetch /> */}
    {/* <Firebase/> */}
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Create />}/>
        <Route path='/edit' element={<Edit />}/>
      </Routes>
    </BrowserRouter>      */}
    <Count />
    <Display/>
    </>
    </store.Provider>
  );
}

export default App;
