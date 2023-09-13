
import { useContext } from "react";
import { AuthContext } from "../context";

export function useAuth() {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuth has to be used within <AuthContext.Provider>");
  }

  return authContext;
}

