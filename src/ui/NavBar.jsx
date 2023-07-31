import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../authContext";

function NavBar() {
  const navigate = useNavigate();
  const { updateIsAuthenticated } = useAuthContext();
  return (
    <nav className="h-[75px] flex justify-between items-center bg-yellow-500">
      <h1 className="text-2xl md:text-4xl px-3 font-bold">NET Survey</h1>
      <button
        onClick={() => {
          updateIsAuthenticated(false);
          navigate("/login", { replace: true });
        }}
        className="text-xl md:text-3xl p-2 mx-3 border-2 border-solid border-black rounded-xl hover:bg-black hover:text-white"
      >
        Log out
      </button>
    </nav>
  );
}

export default NavBar;
