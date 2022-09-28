import React, { useEffect, useState } from "react";
import { Error } from "./Error";
import { nanoid } from "nanoid";

export const Form = ({
  patients,
  setPatients,
  patient,
  modoEdicion,
  setModoEdicion,
  setPatient
}) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [symptom, setSymptom] = useState("");
  const [error, setError] = useState(false);

  const id = nanoid(10);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setAlta(patient.alta);
      setSymptom(patient.symptom);
    }
  }, [patient]);

  const onSubmitAdd = (e) => {
    e.preventDefault();
    if ([name, owner, email, alta, symptom].includes("")) {
      setError(true);

      return;
    }
    {
      setError(false);

      const objectPacient = {
        name,
        owner,
        email,
        alta,
        symptom,
      };
      if (patient.id) {
        objectPacient.id = patient.id;
        const patientUpdate = patients.map((patientUp) =>
          patientUp.id === patient.id ? objectPacient : patientUp
        );
        setPatients(patientUpdate);
        setModoEdicion(false);
        setPatient({})
      } else {
        objectPacient.id = id;
        setPatients([...patients, objectPacient]);
      }
      setName("");
      setOwner("");
      setEmail("");
      setAlta("");
      setSymptom("");
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mb-10 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={onSubmitAdd}
        className="bg-white shadow-md rounded-lg py-10 px-5"
      >
        {error && <Error message="Todos los campos son obligatorios" />}
        <div className="mt-5">
          <label
            htmlFor="name"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="name"
            type="text"
            placeholder="Nombre de la Mascota"
            className="p-2 border-2 w-full mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del Propietario
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Nombre del Propietario"
            className="p-2 border-2 w-full mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="correo electrónico"
            className="p-2 border-2 w-full mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="p-2 border-2 w-full mt-2 placeholder-gray-400 rounded-md"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            className="p-2 border-2 w-full mt-2 placeholder-gray-400 rounded-md"
            id="sintomas"
            cols="30"
            rows="10"
            placeholder="Describe los Sintomas"
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          className="w-full text-white p-3 bg-indigo-600 uppercase font-bold hover:bg-indigo-700 rounded-lg cursor-pointer transition-colors"
          value={modoEdicion ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};
