import { Link } from "react-router-dom";
import FormUi from "./FormUi";
import useFormData from "../hooks/useFormData";
import useSignUp from "../hooks/useSignUp";
import { signUpSchema } from "../validation";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

const initialData = {
  fullName: "",
  email: "",
  password: "",
};

function SignUpForm() {
  const { formData, handleData, validationErrors, validateData } = useFormData(
    initialData,
    signUpSchema
  );

  const { isPending, signUp } = useSignUp();

   function handleSubmit(e) {
    e.preventDefault();

    // Validate form data
    const errors = validateData();

    if (Object.keys(errors).length > 0) return;

    signUp(formData);
  }

  return (
    <FormUi onChange={handleData} onSubmit={handleSubmit}>
      
      <FormUi.Header>
        <FormUi.Title>Create Account</FormUi.Title>
        <FormUi.Subtitle>
          Please sign up so you can book appointment
        </FormUi.Subtitle>
      </FormUi.Header>

      <FormUi.Body>
        <Input error={validationErrors?.fullName} type="text" name={"fullName"}>
          Full Name
        </Input>

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

        <SubmitButton isPending={isPending}>Create Account</SubmitButton>
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
