
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About/About';

import Blogs from './Pages/Home/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Teachers from './Pages/Home/Teachers/Teachers';

import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequiredAuth from './Pages/Login/RequiredAuth/RequiredAuth';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={
          <RequiredAuth>
            <Blogs></Blogs>
          </RequiredAuth>
        }></Route>
        <Route path='/about' element={
          <RequiredAuth>
            <About></About>
          </RequiredAuth>
        }></Route>
        <Route path='/teachers' element={<Teachers></Teachers>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

    </div >
  );
}

export default App;
