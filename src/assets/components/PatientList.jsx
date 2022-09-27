import React from "react";
import { Patient } from "./Patient";

export const PatientList = () => {
  return (
    <>
      <div className="md:w-1/2 lg:w-2/5 mb-10 mx-5">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">Administra tus Pacientes y <span className="text-indigo-600 font-bold">Citas</span></p>
      <Patient name="Hook" owner="Williams" email="hernandw@gmail.com" date="22/09/2022" symptom=" Fiebre" />
      
      </div>
    </>
  );
};
