import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import UserLogin from './Components/UserLogin';
import AboutUs from './Components/AboutUs';
import MyProfile from './Components/MyProfile';
import PostBlog from './Components/PostBlog';
import Admin from './Components/Admin';
import AdminHome from './Components/AdminHome';
import AllUsers from './Components/AllUsers';
import AllPost from './Components/AllPost';
import MyPost from './Components/MyPost';
import EditProfile from './Components/EditProfile';
import EditPost from './Components/EditPost';

import {BrowserRouter,Routes,Route} from 'react-router-dom';





function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/Register' element={<Register/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/UserLogin' element={<UserLogin/>} />
      <Route path='/AboutUs' element={<AboutUs/>} />
      <Route path='/MyProfile' element={<MyProfile/>} />
      <Route path='/PostBlog' element={<PostBlog/>} />
      <Route path='/Admin' element={<Admin/>} />
      <Route path='/AdminHome' element={<AdminHome/>} />
      <Route path='/AllUsers' element={<AllUsers/>} />
      <Route path='/AllPost' element={<AllPost/>} />
      <Route path='/MyPost' element={<MyPost/>} />
      <Route path='/EditProfile' element={<EditProfile/>} />
      <Route path='/EditPost/:id' element={<EditPost/>} />
      

      </Routes>

      
    </div>
    </BrowserRouter>
  );
}

export default App;
