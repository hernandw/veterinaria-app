import "./App.css";
import { useState } from "react";
import { Header, Form, PatientList } from "./assets/components";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  return (
    <div className="container mx-auto m-20">
      <Header />

      <div className="mt-12 md:flex">
        <Form patients={patients} setPatients={setPatients} patient={patient}/>
        <PatientList patients={patients} setPatient={setPatient} setPatients={setPatients}  />
      </div>
    </div>
  );
}

export default App;
