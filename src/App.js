import './App.css';
import './index.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Authentication/Login';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import Signup from './pages/Authentication/Signup';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <HashRouter>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/allbase' element={<Login />} />
        <Route path='/' element={<Login />} />
      </Routes>
      {/* </BrowserRouter> */}
    </HashRouter>
  );
}

export default App;
