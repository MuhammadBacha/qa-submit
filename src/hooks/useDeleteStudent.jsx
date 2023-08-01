import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteStudent } from "../services/helpers";
import { toast } from "react-hot-toast";

function useDeleteStudent() {
  const queryClient = useQueryClient();

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
