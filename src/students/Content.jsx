import Filters from "./Filters";
import Sort from "./Sort";
import Search from "../ui/Search";
import StudentsTable from "./StudentsTable";

function Content() {
  return (
    <div className="grid grid-cols-1 w-[80%]">
      <div className=" h-[3.5rem] text-sm md:textmd flex justify-evenly items-center bg-yellow-400 font-semibold">
        <div className="flex text-[15px] gap-2">
          <Filters />
          <Sort />
        </div>
      </div>
      <StudentsTable />
    </div>
  );
}

export default Content;
