import logo from './logo.svg';

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Cont from './contactus';
import Navbar from "./Components/Navbar";
import Home from './Home';


import './App.css';
import About from './About';
import Basic from './Components/Basic[1]';
import Fruit from './Components/Fruit[1]';
import Nut from './Components/Nut[1]';
import Info from './info';


function App() {
  return (
    <div className="App">

    <Router>
    <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
     <Route path='basic' element={<Basic/>}/>
     <Route path='fruit' element={<Fruit/>}/>
     <Route path='nut' element={<Nut/>}/>
      <Route path='/contact' element={<Cont/>}/>
      <Route path='/basd' element={<Info/>}/>
      
     </Routes>
     </Router>
     
     
     
    </div>
  );
}

export default App;
