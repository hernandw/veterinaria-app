import "./App.css";
import { useEffect, useState } from "react";
import { Header, Form, PatientList } from "./assets/components";

function App() {
  const [patients, setPatients] = useState(
    JSON.parse(localStorage.getItem("patients")) ?? []
  );
  const [patient, setPatient] = useState({});
  const [modoEdicion, setModoEdicion] = useState(false);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

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
          setPatient={setPatient}
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
