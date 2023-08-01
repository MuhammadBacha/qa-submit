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
      // Invalidate every student query
      queryClient.invalidateQueries(["students"]);
      toast.success("Student deleted successfully!");
    },
  });
  return { isLoading, mutate };
}

export default useDeleteStudent;
