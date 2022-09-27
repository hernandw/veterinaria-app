import "./App.css";
import { useState } from "react";
import { Header, Form, PatientList } from "./assets/components";

function App() {
  const [patient, setPatient] = useState([]);
  return (
    <div className="container mx-auto m-20">
      <Header />

      <div className="mt-12 md:flex">
        <Form patient={patient} setPatient={setPatient} />
        <PatientList patient={patient} />
      </div>
    </div>
  );
}

export default App;
