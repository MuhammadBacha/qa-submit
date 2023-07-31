import useLogin from "./hooks/useLogin";
import Input from "./ui//Input";
import { useForm } from "react-hook-form";
import Spinner from "./ui/Spinner";
import { Link } from "react-router-dom";

function AdminLogin() {
  const { data, mutate, error, isLoading, isError } = useLogin();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(formData) {
    const { email, password } = formData;
    mutate(
      { email, password },
      {
        onSettled: () => {
          reset();
        },
      }
    );
    // console.log(formData);
  }
  return (
    <div className="flex items-center justify-center flex-col h-screen ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2 border-2 border-solid border-black p-3 my-2 rounded-md shadow-xl"
      >
        <Input
          label="Email"
          fieldName="email"
          register={register}
          extraValidation={{
            minLength: {
              value: 4,
              message: "email must have minimum 4 characters.",
            },
          }}
          error={errors["email"]}
          disabled={isLoading}
        />
        <Input
          label="Password"
          fieldName="password"
          type="password"
          register={register}
          extraValidation={{
            minLength: {
              value: 4,
              message: "Password must have minimum 4 characters.",
            },
            validate: (val) =>
              /\d/.test(val) || "Password must contain atleast one digit.",
          }}
          error={errors["password"]}
          disabled={isLoading}
        />
        <div className="flex justify-center items-center">
          {isLoading ? (
            <Spinner size="medium" />
          ) : (
            <button
              type="submit"
              className="p-2 w-20 rounded-2xl border-2 border-solid border-black hover:text-white hover:bg-black font-semibold"
            >
              Submit
            </button>
          )}
        </div>
      </form>
      <Link
        to="/"
        replace
        className="font-semibold text-md md:text-xl text-blue-900 hover:underline cursor-Linkointer"
      >
        Move back to the Form page
      </Link>
    </div>
  );
}

export default AdminLogin;
