import React from "react";
import { Patient } from "./Patient";

export const PatientList = ({ patients, setPatient }) => {
  return (
    <>
      <div className="md:w-1/2 lg:w-3/5 mb-10 mx-5">
        {patients && patients.length ? (
          <>
            <h2 className="font-black text-3xl text-center">
              Listado Pacientes
            </h2>
            <p className="text-lg mt-5 text-center mb-10">
              Administra tus Pacientes y{" "}
              <span className="text-indigo-600 font-bold">Citas</span>
            </p>
            {patients.map((patient) => (
              <Patient
                key={patient.id}
                patient={patient}
                setPatient={setPatient}
              />
            ))}
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">
              No hay Pacientes
            </h2>
            <p className="text-lg mt-5 text-center mb-10">
              Comienza agregando pacientes{" "}
              <span className="text-indigo-600 font-bold">
                y apareceran aquí
              </span>
            </p>
          </>
        )}
      </div>
    </>
  );
};
