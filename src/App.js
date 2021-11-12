import './App.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Authentication/Login';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import Signup from './pages/Authentication/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
