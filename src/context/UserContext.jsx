import { createContext, useContext } from "react";
import { useJwt } from "react-jwt";

const UseerContext = createContext();

function UserContextProvider({ children }) {
  const token = localStorage.getItem("supabaseToken");
  const { decodedToken, isExpired } = useJwt(token);
  console.log(decodedToken, isExpired);
  return (
    <UseerContext.Provider value={{ user: decodedToken, isExpired }}>
      {children}
    </UseerContext.Provider>
  );
}

function useUser() {
  const context = useContext(UseerContext);

  if (context == undefined) {
    console.error("User Context is used outside the provider");
    throw new Error("User Mode Context is used outside the provider");
  }

  return context;
}

export { UserContextProvider, useUser };
