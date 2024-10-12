import { useState } from "react";

function useSignUp() {
  const [data, setData] = useState({});
  const [isPending, setIsPending] = useState({});
  const signUp = (e) => {
    e.preventDefault();
    setIsPending(true);
  };
  return [data, isPending, signUp];
}

export default useSignUp;
