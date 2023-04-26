import { useContext } from "react";
import AuthUserContext from "../context/authUserContext";

function useAuth() {
  const authUserContext = useContext(AuthUserContext);
  if (!authUserContext) {
    throw new Error("useAuth has to be used within <AuthUserContext.Provider>");
  }

  return authUserContext;
}

export default useAuth;
