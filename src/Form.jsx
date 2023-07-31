import React from "react";
import Input from "./ui/Input";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { addStudent } from "./services/helpers";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { inputsArray } from "./services/constants";

function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const { isLoading, mutate } = useMutation({
    mutationFn: addStudent,
    onSuccess: () => {
      reset();
      toast.success("Data submitted successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  function onSubmit(formData) {
    mutate(formData);
  }
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] overflow-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-center">
        Fill the information below and enter your NET marks!
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-2 border-solid border-black p-3 my-2 rounded-md shadow-xl"
      >
        {inputsArray.map((input) => (
          <>
            {/* Label name just for showing while fieldName for actual programming */}
            <Input
              key={input.label}
              label={input.label}
              fieldName={input.fieldName}
              type={input?.type}
              options={input?.options}
              register={register}
              extraValidation={input?.extraValidation}
              error={errors[input.fieldName]}
              disabled={isLoading}
            />
          </>
        ))}
        <div className="flex flex-col items-center justify-center">
          <button
            disabled={isLoading}
            type="submit"
            className="p-2 w-20 rounded-2xl border-2 border-solid disabled:cursor-not-allowed border-black hover:text-white hover:bg-black font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
      <Link
        to="/login"
        className="text-blue-900 text-xl font-semibold hover:underline"
      >
        Log in as admin
      </Link>
    </div>
  );
}

export default Form;
