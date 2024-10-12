import { useState } from "react";

//**you must give every input field a name attribute**

function useFormData(iniitialData, schema) {
  const [state, setState] = useState(iniitialData);
  const [validationErrors, setValidationErrors] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newInput = { ...state, [name]: value };
    setState(newInput);
    if (schema) {
      const errors = schema
        .validate(newInput, { abortEarly: false })
        ?.error?.details.reduce((acc, curr) => {
          return curr.context[value] === newInput[curr.context.key]
            ? acc
            : { ...acc, [curr.context.key]: curr.message };
        }, {});

      setValidationErrors(errors);
    }
  };
  return [state, handleChange, validationErrors];
}

export default useFormData;
