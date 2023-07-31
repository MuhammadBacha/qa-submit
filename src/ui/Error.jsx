import React from "react";

function Error({ children }) {
  return (
    <h1 className="text-3xl text-center font-semibold text-red-500">
      {children}
    </h1>
  );
}

export default Error;
