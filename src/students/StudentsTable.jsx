import React from "react";
import StudentRow from "./StudentRow";
import TableHeader from "./TableHeader";
import useStudents from "../hooks/useStudents";
import Spinner from "../ui/Spinner";
import Pagination from "./Pagination";
import Error from "../ui/Error";
import { STUDENTS_PER_PAGE } from "../services/constants";

function StudentsTable() {
  const {
    data: { students, totalStudents },
    error,
    isLoading,
    isFetching,
    isError,
  } = useStudents();
  // console.log(isPreviousData);
  if (isLoading)
    return (
      <div className="h-[20rem] flex justify-center items-center">
        <Spinner size="large" />
      </div>
    );
  if (isError) return <Error>{error.message}</Error>;
  return (
    <>
      {isFetching ? (
        <div className="flex justify-center items-center h-[17rem]">
          <Spinner size="large" />
        </div>
      ) : !totalStudents ? (
        <h1 className="flex items-center justify-center font-semibold text-xl md:text-4xl h-[10rem]">
          No students found!
        </h1>
      ) : (
        <table>
          <TableHeader />
          <tbody className="md:text-[1.1rem] font-semibold ">
            {students.map((student, i) => (
              <StudentRow
                key={student.name}
                student={student}
                numberOfPages={Math.ceil(totalStudents / STUDENTS_PER_PAGE)}
                index={i}
              />
            ))}
          </tbody>
        </table>
      )}
      <Pagination totalStudents={totalStudents} />
    </>
  );
}

export default StudentsTable;
