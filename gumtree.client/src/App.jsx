import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
    return (
        <>  
                
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
            <Footer />
            
        </>
        
    );
}

export default App;