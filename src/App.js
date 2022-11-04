import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home';
import Account from './pages/account';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/account' element={<Account/>} />
    </Routes>
    </Router>
);
}
  
export default App;