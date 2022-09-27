import React from "react";

export const Error = ({message}) => {
  return (
    <p className="bg-red-800 text-white text-center rounded-lg p-3 font-bold uppercase">
      {message}
    </p>
  );
};
