import React, {useState, useEffect} from 'react'
import RadiologyCard from '../../components/radioLogyCard'

const Radiology = () => {
  const patientId = "P515PQ";
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQNTE1UFEiLCJ1c2VyVHlwZSI6InBhdGllbnQiLCJfaWQiOiI2NDA1ZjE2NjRlZmY0Y2ZkMzRkZmYyZWMiLCJpYXQiOjE2NzgyODQwNDgsImV4cCI6MTY4NjkyNDA0OH0.WTiQqOyg3q0kdf7pKhs-0kEm3tUWbbTIjH5e80iYwSY"
    const[radiology, setRadiology] = useState('');
    
  

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
    setRadiology(data.radiology);
    console.log(radiology);
    
  }
  useEffect(() => {
    fetchMedicalData();
  }, []);
  return (
    <div>
      <RadiologyCard />
    </div>
  )
}

export default Radiology
