import ErrorInputFieldMassage from "./ErrorInputFieldMassage";

function Input({ children, error, name, type = "text" }) {
  return (
    <label className={`flex flex-col gap-1 ${error ? "text-red-500" : ""}`}>
      {children}
      <input
        name={name}
        className={`border-2  py-2 px-2 rounded-lg ${
          error ? "border-red-500" : ""
        }`}
        type={type}
      />
      <ErrorInputFieldMassage>{error}</ErrorInputFieldMassage>
    </label>
  );
}

export default Input;
