import { Link } from "react-router-dom";
import FormUi from "./FormUi";
import { signInSchema } from "../validation/validation";
import useFormData from "../hooks/useFormData";
import ErrorInputFieldMassage from "./ErrorInputFieldMassage";

function LoginForm() {
  const [formData, handleData, validationErrors] = useFormData(
    {},
    signInSchema
  );
  console.log(validationErrors,formData);

  return (
    <FormUi onChange={handleData}>
      <FormUi.Header>
        <FormUi.Title>Login</FormUi.Title>
        <FormUi.Subtitle>
          Please login so you can book appointment
        </FormUi.Subtitle>
      </FormUi.Header>

      <FormUi.Body>
        <label
          className={`flex flex-col gap-1 ${
            validationErrors?.email ? "text-red-500" : ""
          }`}
        >
          Email
          <input
            name="email"
            className={`border-2 outline-none  py-2 px-2 rounded-lg ${
              validationErrors?.email ? "border-red-500" : ""
            }`}
            type="email"
          />
          <ErrorInputFieldMassage>
            {validationErrors?.email}
          </ErrorInputFieldMassage>
        </label>
        <label
          className={`flex flex-col gap-1 ${
            validationErrors?.password ? "text-red-500" : ""
          }`}
        >
          Password
          <input
            name="password"
            className={`border-2 py-2 px-2 rounded-lg ${
              validationErrors?.password ? "border-red-500" : ""
            }`}
            type="password"
          />
          <ErrorInputFieldMassage>
            {validationErrors?.password}
          </ErrorInputFieldMassage>
        </label>
        <button
          type="submit"
          className="bg-primary text-[#fff] py-2 rounded-lg"
        >
          Login
        </button>
      </FormUi.Body>
      <FormUi.Footer>
        Create new account?&nbsp;
        <Link to={"/signup"} className="underline text-primary">
          Click here
        </Link>
      </FormUi.Footer>
    </FormUi>
  );
}

export default LoginForm;
