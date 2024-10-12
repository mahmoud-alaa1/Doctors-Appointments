import { Link } from "react-router-dom";
import FormUi from "./FormUi";
import useFormData from "../hooks/useFormData";
import { signUpSchema } from "../validation/validation";
import ErrorInputFieldMassage from "../ui/ErrorInputFieldMassage";
function SignUpForm() {
  const [formData, handleData, validationErrors] = useFormData(
    {},
    signUpSchema
  );

  return (
    <FormUi onChange={handleData}>
      <FormUi.Header>
        <FormUi.Title>Create Account</FormUi.Title>
        <FormUi.Subtitle>
          Please sign up so you can book appointment
        </FormUi.Subtitle>
      </FormUi.Header>
      <FormUi.Body>
        <label
          className={`flex flex-col gap-1 ${
            validationErrors?.fullName ? "text-red-500" : ""
          }`}
        >
          Full Name
          <input
            name="fullName"
            className={`border-2  py-2 px-2 rounded-lg ${
              validationErrors?.fullName ? "border-red-500" : ""
            }`}
            type="text"
          />
          <ErrorInputFieldMassage>
            {validationErrors?.fullName}
          </ErrorInputFieldMassage>
        </label>
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
          Create Account
        </button>
      </FormUi.Body>
      <FormUi.Footer>
        Already have an account?&nbsp;
        <Link to={"/login"} className="underline text-primary">
          Login here
        </Link>
      </FormUi.Footer>
    </FormUi>
  );
}

export default SignUpForm;
