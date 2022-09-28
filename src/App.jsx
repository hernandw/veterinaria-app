import "./App.css";
import { useState } from "react";
import { Header, Form, PatientList } from "./assets/components";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});
  const [modoEdicion, setModoEdicion] = useState(false);

  return (
    <div className="container mx-auto m-20">
      <Header />

      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          modoEdicion={modoEdicion}
          setModoEdicion={setModoEdicion}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          setPatients={setPatients}
          setModoEdicion={setModoEdicion}
        />
      </div>
    </div>
  );
}

export default App;
