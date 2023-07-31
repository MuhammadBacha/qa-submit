import { BsFillTrashFill } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import { STUDENTS_PER_PAGE } from "../services/constants";
import React from "react";
import Spinner from "../ui/Spinner";
import useDeleteStudent from "../hooks/useDeleteStudent";

function StudentRow({ student, numberOfPages, index }) {
  const [searchParams] = useSearchParams();
  const page = +searchParams.get("page") || 0;

  const { id, name, desiredField, test, netMarks, aggregate, stream } = student;

  const { isLoading, mutate } = useDeleteStudent(numberOfPages);
  const num = page === 0 ? index + 1 : index + 1 + STUDENTS_PER_PAGE * page;
  return (
    <tr className="text-center tracking-wide border-b-2 border-solid border-slate-300">
      <td className="sm:p-1 md:p-2">{num.toString().padStart(3, "0")}</td>
      <td className="sm:p-1 md:p-2 text-left">{name}</td>
      <td className="sm:p-1 md:p-2">{stream}</td>
      <td className="sm:p-1 md:p-2">{test}</td>
      <td className="sm:p-1 md:p-2">{netMarks}</td>
      <td className="sm:p-1 md:p-2">{aggregate}</td>
      <td className="sm:p-1 md:p-2">{desiredField}</td>
      <td className="sm:p-1 md:p-2">
        {isLoading ? (
          <Spinner height={15} width={15} />
        ) : (
          <button
            onClick={() => mutate(id)}
            disabled={isLoading}
            className="border-2 p-1 border-solid border-black rounded-md disabled:cursor-not-allowed hover:bg-black hover:text-white"
          >
            <BsFillTrashFill />
          </button>
        )}
      </td>
    </tr>
  );
}

export default StudentRow;
