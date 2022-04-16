
import { Route, Router } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Home/Blogs/Blogs';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div >
      <Header></Header>
      <Blogs></Blogs>

    </div >
  );
}

export default App;
