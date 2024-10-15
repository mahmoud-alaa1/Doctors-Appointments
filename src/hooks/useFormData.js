import { useState } from "react";

// Custom hook to manage form data and validation
function useFormData(initialData, schema) {
  const [formData, setFormData] = useState(initialData);

  const [validationErrors, setValidationErrors] = useState({});

  // Validate form data using the provided schema
  const validateData = () => {
    const errors =
      schema?.validate(formData, { abortEarly: false })?.error?.details.reduce((acc, curr) => {
        return { ...acc, [curr.path[0]]: curr.message };
      }, {}) || {};

    setValidationErrors(errors);
    return errors;
  };

  // Update form data and trigger validation
  const handleData = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return { formData, handleData, validationErrors, validateData };
}

export default useFormData;
