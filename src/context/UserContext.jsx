import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const token = localStorage.getItem("supabaseToken") || null;
  const [user, setUser] = useState(token);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);

  if (context == undefined) {
    console.error("User Context is used outside the provider");
    throw new Error("User Mode Context is used outside the provider");
  }

  return context;
}

export { UserContextProvider, useUser };
