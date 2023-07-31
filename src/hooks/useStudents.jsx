import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getStudents } from "../services/helpers";
import { STUDENTS_PER_PAGE } from "../services/constants";
import { useSearchParams } from "react-router-dom";

function useStudents() {
  // Get values from the searchParams
  const [searchParams] = useSearchParams();
  const page = +searchParams.get("page") || 0;
  const sort = searchParams.get("sort") || "netMarks_dsc";

  // in case of all, we want no filter, so just make it null,
  let stream = searchParams.get("stream");
  stream = !stream || stream === "all" ? null : stream;

  let test = searchParams.get("test");
  test = !test || test === "all" ? null : test;

  let desiredField = searchParams.get("desiredField");
  desiredField = !desiredField || desiredField === "all" ? null : desiredField;

  const filters = { stream, test, desiredField };
  // console.log(filters);

  const queryClient = useQueryClient();

  const {
    data: { students, totalStudents } = {}, // Initially, the object is undefined, so we set a default value
    error,
    isSuccess,
    isLoading,
    isFetching,
    isError,
    isPreviousData,
  } = useQuery({
    queryKey: ["students", page, filters, sort], // when you click next, page increments by 1, the key changes and a new query is made
    queryFn: () => getStudents({ page, filters, sort }),
    keepPreviousData: true,
  });
  const numberOfPages = Math.ceil(totalStudents / STUDENTS_PER_PAGE);

  if (page < numberOfPages - 1) {
    // aik qadam aage ka fetch karo, unless u r not at the end
    queryClient.prefetchQuery({
      queryKey: ["students", page + 1, filters, sort],
      queryFn: () => getStudents({ page: page + 1, filters, sort }),
    });
  }

  if (page > 0) {
    // aik qadam pechle ka bhi to socho, unless u r not at the start.
    queryClient.prefetchQuery({
      queryKey: ["students", page - 1, filters, sort],
      queryFn: () => getStudents({ page: page - 1, filters, sort }),
    });
  }

  return {
    data: { students, totalStudents },
    error,
    isSuccess,
    isLoading,
    isFetching,
    isError,
    isPreviousData,
  };
}

export default useStudents;
