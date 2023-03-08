import React, {useState, useEffect} from 'react'

import UsingCard from '../../components/usingCard';

const Prescription = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const patientId = "P515PQ";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJQNTE1UFEiLCJ1c2VyVHlwZSI6InBhdGllbnQiLCJfaWQiOiI2NDA1ZjE2NjRlZmY0Y2ZkMzRkZmYyZWMiLCJpYXQiOjE2NzgyODQwNDgsImV4cCI6MTY4NjkyNDA0OH0.WTiQqOyg3q0kdf7pKhs-0kEm3tUWbbTIjH5e80iYwSY"
  const [prescription, setPrescription] = useState('');

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
    console.log(prescription);
  }
  useEffect(() => {
    fetchMedicalData();
  }, []);
  return (
    <div>
      <UsingCard />
    </div>
  )
}

export default Prescription
