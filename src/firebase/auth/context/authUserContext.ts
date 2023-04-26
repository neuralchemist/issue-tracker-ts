import { signIn, signUp, signOut } from "../services";
import { createContext } from "react";
import { IAuthContext } from "../types";

const AuthUserContext = createContext<IAuthContext>({
  authUser: null,
  isLoading: true,
  signOut: signOut,
  signUp: signUp,
  signIn: signIn,
});

export default AuthUserContext;
