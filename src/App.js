import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login'
import Register from './pages/register';
import Home from './pages/home';
import Text from './pages/text';
import Pdf from './pages/pdf';
import Image from './pages/image';
import Default from './pages/default';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>} />
      <Route path="/home" element={<Home/>}/>
      <Route path='/text' element={<Text/>}/>
      <Route path='/pdf' element={<Pdf/>}/>
      <Route path='/image' element={<Image/>}/>
      <Route path='/default' element={<Default/>}/>
      </Routes>



    </BrowserRouter>
  );
}

export default App;
