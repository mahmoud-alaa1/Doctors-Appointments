import { Link } from "react-router-dom";
import FormUi from "./FormUi";
import { signInSchema } from "../validation";
import useFormData from "../hooks/useFormData";
import SubmitButton from "./SubmitButton";
import Input from "./Input";
import useSignIn from "../hooks/useSignIn";

const initialData = {
  email: "",
  password: "",
};

function LoginForm() {
  const { formData, handleData, validationErrors, validateData } = useFormData(
    initialData,
    signInSchema
  );
  const { isPending, signIn } = useSignIn();
  async function handleSubmit(e) {
    e.preventDefault();

    // Validate form data
    const errors = validateData();

    if (Object.keys(errors).length > 0) return;

    signIn(formData);
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

        <SubmitButton isPending={isPending}>Login</SubmitButton>
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
