import React from "react";
import { useSearchParams } from "react-router-dom";

function Sort() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="flex flex-col justify-center">
      <label htmlFor="sort">Sort by</label>
      <select
        id="sort"
        onChange={(e) => {
          searchParams.set("sort", e.target.value);
          searchParams.set("page", 0);
          setSearchParams(searchParams);
        }}
      >
        <option value="netMarks_dsc">Marks (High to Low)</option>
        <option value="netMarks_asc">Marks (Low to High)</option>
        <option value="aggregate_dsc">Aggregate (High to Low)</option>
        <option value="aggregate_asc">Aggregate (Low to High)</option>
      </select>
    </div>
  );
}

export default Sort;
