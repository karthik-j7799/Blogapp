import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/Register' element={<Register/>} />
      <Route path='/Login' element={<Login/>} />

      </Routes>

      
    </div>
    </BrowserRouter>
  );
}

export default App;
