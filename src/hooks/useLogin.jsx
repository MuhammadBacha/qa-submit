import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../services/helpers";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../authContext";

function useLogin() {
  const { updateIsAuthenticated } = useAuthContext();
  const navigate = useNavigate();
  const { data, mutate, error, isLoading, isError } = useMutation({
    mutationFn: ({ email, password }) => loginUser({ email, password }),
    onSuccess: () => {
      toast.success("Login successful!");
      navigate("/admin", { replace: true });
      window.localStorage.setItem("isAuthenticated", true);
      updateIsAuthenticated(true);
    },
    onError: (err) => {
      toast.error(err.message);
      //   window.localStorage.setItem("isAuthenticated", false);
    },
  });
  return { data, mutate, error, isLoading, isError };
}

export default useLogin;
