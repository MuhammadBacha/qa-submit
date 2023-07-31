function Input({
  label,
  fieldName,
  type = "text",
  options,
  register,
  extraValidation,
  error,
  disabled,
}) {
  return (
    <>
      <div className="my-[5px] md:grid md:grid-cols-[1fr_2fr] md:gap-10">
        <label className=" font-semibold md:text-xl p-1" htmlFor={fieldName}>
          {label}
        </label>
        {type !== "select" && (
          <input
            disabled={disabled}
            className="w-full disabled:bg-gray-200 disabled:cursor-not-allowed h-8 border-solid border-2 border-black rounded-md"
            type={type}
            id={fieldName}
            {...register(fieldName, {
              required: `${label} must be provided.`,
              ...extraValidation,
            })}
          />
        )}
        {type === "select" && (
          <select
            className="w-full h-8 border-solid border-2 border-black rounded-md"
            {...register(fieldName, { required: `${label} must be provided.` })}
          >
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-center font-semibold p-1">
          {error.message}
        </p>
      )}
    </>
  );
}

export default Input;
