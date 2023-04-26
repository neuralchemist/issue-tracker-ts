import AuthUserContext from "./context/authUserContext";
import { useFirebaseAuth } from "./hook";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function AuthUserProvider({ children }: Props) {
  const auth = useFirebaseAuth();
  return (
    <AuthUserContext.Provider value={auth}>
      {!auth.isLoading && children}
    </AuthUserContext.Provider>
  );
}

export default AuthUserProvider;
