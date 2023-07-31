import React from "react";
import Content from "./students/Content";
import NavBar from "./ui/NavBar";

function Admin() {
  return (
    <div className="grid grid-rows-[75px_1fr] h-screen">
      <NavBar />
      <main className="flex flex-col justify-center items-center bg-gray-200">
        <Content />
      </main>
    </div>
  );
}

export default Admin;
