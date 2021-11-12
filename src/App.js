import './App.css';
// import Dashboard from './pages/Dashboard';
// import Login from './pages/Authentication/login';
// import SignUp from './pages/Authentication/signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Authentication/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        {/* <Route path='/signup' element={<Login />} />
        <Route path='/forgot-password' element={<Login />} />
        <Route path='/dashboard' element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
