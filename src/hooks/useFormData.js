import { valid } from "joi";
import { useState } from "react";

//**you must give every input field a name attribute**

function useFormData(iniitialData, schema) {
  const [formData, setState] = useState(iniitialData);
  const [validationErrors, setValidationErrors] = useState({});

  function validateData() {
    const errors = schema
      ?.validate(formData, { abortEarly: false })
      ?.error?.details.reduce((acc, curr) => {
        return { ...acc, [curr.path[0]]: curr.message };
      }, {}) || {};

    setValidationErrors(errors);
  }

  const handleData = (e) => {
    const { name, value } = e.target;

    //Get new data form
    const newInput = { ...formData, [name]: value };

    //Update the state
    setState(newInput);

    validateData();


  };
  return { formData, handleData, validationErrors, validateData };
}

export default useFormData;
