import React from "react";
import { headers, widthsArray } from "../services/constants";

function TableHeader() {
  return (
    <thead className="border-b-2  border-slate-500 font-extrabold text-sm md:text-xl p-2">
      <tr className="bg-slate-400 w-5">
        {headers.map((header, i) => (
          <th key={header} style={{ width: `${widthsArray[i]}rem` }}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
