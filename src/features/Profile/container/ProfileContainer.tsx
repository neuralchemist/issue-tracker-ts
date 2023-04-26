import { useState } from "react";
// react-router-dom
import { useNavigate } from "react-router-dom";
// custom hook
import { useAuth } from "../../../firebase/auth/hook";
// custom routes
import { ProfileInfo } from "../components";
import { HOME } from "../../../common/utils/routes";
import { QueryStatus } from "@tanstack/react-query";

function ProfileContainer() {
  // status and error state
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<QueryStatus>("success");
  // react-router-dom logic
  const navigate = useNavigate();

  // firebase logic
  const { signOut, authUser } = useAuth();

  const onSignout = async () => {
    try {
      setStatus("loading");
      setErrorMessage(null);

      await signOut();
      setStatus("success");

      navigate(HOME);
    } catch (err) {
      // console.error('SignIn Error: ',err);
      setErrorMessage("failed to sign out");
      setStatus("error");
    }
  };
  return (
    <ProfileInfo
      user={authUser}
      onSignout={onSignout}
      status={status}
      errorMessage={errorMessage}
    />
  );
}

export default ProfileContainer;
