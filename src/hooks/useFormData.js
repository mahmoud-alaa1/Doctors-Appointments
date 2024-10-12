import { useState } from "react";


//**you must give every input field a name attribute**

function useFormData(iniitialData) {
  const [state, setState] = useState(iniitialData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return [state, handleChange];
}

export default useFormData;
