import React from "react";

function Search() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        className="rounded-md border-1 md:py-1  border-solid border-black md:placeholder:p-2 text-sm md:text-md"
      />
      <button className="mx-3 text-sm md:text-md border-2 border-solid border-black rounded-md p-1 hover:bg-black hover:text-yellow-500">
        Search
      </button>
    </div>
  );
}

export default Search;
