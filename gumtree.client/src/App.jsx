import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Home from './pages/Home';
import Register from './components/Register/Register';
import UserLogin from './components/Login/Login';


function App() {
    return (
        <>  
                
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/userlogin" element={<UserLogin />}></Route>
                <Route path="/logout" element={<Logout />}></Route>

            </Routes>
            <Footer />
            
        </>
        
    );
}

export default App;