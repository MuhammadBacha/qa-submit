import React from "react";
import { inputsArray } from "../services/constants";
import { useSearchParams } from "react-router-dom";

function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      {inputsArray.map(
        (input) =>
          input.type === "select" && (
            <div className="flex flex-col justify-center" key={input.fieldName}>
              <label htmlFor={input.fieldName}>{input.label}</label>
              <select
                id={input.fieldName}
                key={input.fieldName}
                value={searchParams.get(input.fieldName) || "All"}
                onChange={(e) => {
                  // console.log(e.target.value)
                  searchParams.set(input.fieldName, e.target.value);
                  if (searchParams.get("page")) searchParams.set("page", 0);
                  setSearchParams(searchParams);
                }}
              >
                <option value="all">All</option>
                {input.options.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )
      )}
    </>
  );
}

export default Filters;
