import { Link } from "react-router-dom";
import FormUi from "./FormUi";

function LoginForm() {
  return (
    <FormUi>
      <FormUi.Header>
        <FormUi.Title>Login</FormUi.Title>
        <FormUi.Subtitle>
          Please login so you can book appointment
        </FormUi.Subtitle>
      </FormUi.Header>

      <FormUi.Body>
        <label className="flex flex-col gap-1">
          Email
          <input className="border-2  py-2 px-2 rounded-lg" type="email" />
        </label>
        <label className="flex flex-col gap-1">
          Password
          <input className="border-2  py-2 px-2 rounded-lg" type="password" />
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
