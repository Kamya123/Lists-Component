import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import NavBar from './components/navBar';
import Prescription from './pages/prescription';
import LabTest from './pages/labTest';
import Insurance from './pages/insurance';
import RadioLogy from './pages/radiology';




const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route index element={<Prescription />} />
                <Route path='labTest' element={<LabTest />} />
                <Route path='insurance' element={<Insurance />} />
                <Route path='radiology' element={<RadioLogy />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
