import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import NavBar from './components/navBar';
import Prescription from './pages/prescription';
import LabTest from './pages/labTest';
import Insurance from './pages/insurance';
import RadioLogy from './pages/radiology';




const App = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const patientId = "P515PQ";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQNTE1UFEiLCJ1c2VyVHlwZSI6InBhdGllbnQiLCJfaWQiOiI2NDA1ZjE2NjRlZmY0Y2ZkMzRkZmYyZWMiLCJpYXQiOjE2NzgyODQwNDgsImV4cCI6MTY4NjkyNDA0OH0.WTiQqOyg3q0kdf7pKhs-0kEm3tUWbbTIjH5e80iYwSY"
  const [prescription, setPrescription] = useState('');
  const [testReports, setTestReports] = useState('');
  const[radiology, setRadiology] = useState('');
  const [scethoscope, setScethoscope] = useState('');

  const fetchMedicalData = async () => {
    const response = await fetch(
      `https://bhc-web-backend-development.onrender.com/api/appointment/fetch-medical-reports?userId=${patientId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = (await response.json()).data;
    setPrescription(data.prescription);
    setTestReports(data.labReport);
    setRadiology(data.radiology);
    setScethoscope(data.scethoscope);
  }
  useEffect(() => {
    fetchMedicalData();
  }, []);
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                {/* Add props to routes */}
                <Route index element={<Prescription />} />
                <Route path='labTest' element={<LabTest />} />
                <Route path='insurance' element={<Insurance />} />
                <Route path='radiology' element={<RadioLogy />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
