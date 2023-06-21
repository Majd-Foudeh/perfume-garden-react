import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  let isLoggedIn = false;
  const [auth, setAuth] = useState(false);

  const refresh = () => {
    if (localStorage.getItem("token"))
      isLoggedIn = localStorage.getItem("token") ? true : false;

    console.log("isLoggedIn", isLoggedIn);
    setAuth(isLoggedIn);
  };
  useEffect(() => {
    refresh();
  }, []);
  return (
    <>
      {" "}
      <AuthContext.Provider value={{ auth, setAuth, refresh }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
