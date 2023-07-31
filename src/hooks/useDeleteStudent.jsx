import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteStudent } from "../services/helpers";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-hot-toast";

function useDeleteStudent(numberOfPages) {
  const queryClient = useQueryClient();

  const [searchParams] = useSearchParams();
  const page = +searchParams.get("page") || 0;
  const sort = searchParams.get("sort") || "netMarks_dsc";

  let stream = searchParams.get("stream");
  stream = !stream || stream === "all" ? null : stream;

  let test = searchParams.get("test");
  test = !test || test === "all" ? null : test;

  let desiredField = searchParams.get("desiredField");
  desiredField = !desiredField || desiredField === "all" ? null : desiredField;

  const filters = { stream, test, desiredField };

  const { isLoading, mutate } = useMutation({
    mutationFn: (id) => deleteStudent(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["students", page, filters, sort]);
      toast.success("Student deleted successfully!");
      if (page < numberOfPages - 1) {
        for (let i = page; i < numberOfPages; i++) {
          // Invalidate remaining pages
          queryClient.invalidateQueries(["students", i + 1, filters, sort]);
        }
      }
      // In previous pages, change the totalStudents number only
      queryClient.setQueryData(
        ["students", page - 1, filters, sort],
        (prevData) => {
          return {
            ...prevData,
            totalStudents: prevData.totalStudents - 1,
          };
        }
      );
    },
  });
  return { isLoading, mutate };
}

export default useDeleteStudent;
