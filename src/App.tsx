// react-router-dom
import { Routes, Route } from "react-router-dom";
// custom components
import HomePage from "./features/Home/pages/HomePage";
import ProfilePage from "./features/Profile/pages/ProfilePage";
import { SigninPage, SignupPage } from "./features/AuthForm/pages";
// custom routes
import { HOME, PROFILE, SIGNIN, SIGNUP } from "./common/utils/routes";
import { ThemeProviderCustom } from "./common/context";

function App() {
  return (
    <>
      <ThemeProviderCustom>
        <Routes>
          <Route path={HOME} element={<HomePage />} />
          <Route path={PROFILE} element={<ProfilePage />} />
          <Route path={SIGNIN} element={<SigninPage />} />
          <Route path={SIGNUP} element={<SignupPage />} />
        </Routes>
      </ThemeProviderCustom>
    </>
  );
}

export default App;
