import { Link } from "react-router-dom";
import FormUi from "./FormUi";
import { signInSchema } from "../validation/validation";
import useFormData from "../hooks/useFormData";
import ErrorInputFieldMassage from "./ErrorInputFieldMassage";
import { Input } from "postcss";
import SubmitButton from "./SubmitButton";

const initialData = {
  email: "",
  password: "",
};

function LoginForm() {
  const { formData, handleData, validationErrors, validateData } = useFormData(
    initialData,
    signInSchema
  );

  async function handleSubmit(e) {
    e.preventDefault();

    // Validate form data
    const errors = validateData();

    if (Object.keys(errors).length > 0) return;
  }

  return (
    <FormUi onChange={handleData} onSubmit={handleSubmit}>
      <FormUi.Header>
        <FormUi.Title>Login</FormUi.Title>
        <FormUi.Subtitle>
          Please login so you can book appointment
        </FormUi.Subtitle>
      </FormUi.Header>

      <FormUi.Body>
        <Input error={validationErrors?.email} type="email" name={"email"}>
          Email
        </Input>

        <Input
          error={validationErrors?.password}
          type="password"
          name={"password"}
        >
          Password
        </Input>

        <SubmitButton>Login</SubmitButton>
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
