import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { STUDENTS_PER_PAGE } from "../services/constants";
import { useSearchParams } from "react-router-dom";

function Pagination({ totalStudents }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = +searchParams.get("page") || 0;
  const numberOfPages = Math.ceil(totalStudents / STUDENTS_PER_PAGE);

  function previousPage() {
    searchParams.set("page", page === 0 ? page : page - 1);
    setSearchParams(searchParams);
  }
  function nextPage() {
    searchParams.set("page", page === numberOfPages - 1 ? page : page + 1);
    setSearchParams(searchParams);
  }

  return (
    <div className="h-[3rem] flex justify-around items-center bg-yellow-400">
      <p className="text-md">
        Showing{" "}
        <span className="font-bold">{STUDENTS_PER_PAGE * page + 1}</span> to{" "}
        <span className="font-bold">
          {page === numberOfPages - 1
            ? totalStudents
            : STUDENTS_PER_PAGE * (page + 1)}
        </span>{" "}
        of <span className="font-bold">{totalStudents}</span> students
      </p>
      <div className="flex gap-3">
        <button
          disabled={page === 0}
          onClick={previousPage}
          className="flex items-center hover:bg-black hover:text-yellow-400 py-1 px-2 rounded-md disabled:cursor-not-allowed disabled:hover:bg-yellow-400 disabled:hover:text-black"
        >
          <HiChevronLeft size={30} />
          <span>Previous</span>
        </button>
        <button
          disabled={page === numberOfPages - 1}
          onClick={nextPage}
          className="flex items-center hover:bg-black hover:text-yellow-400 py-1 px-2 rounded-md disabled:cursor-not-allowed disabled:hover:bg-yellow-400 disabled:hover:text-black"
        >
          <span>Next</span>
          <HiChevronRight size={30} />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
