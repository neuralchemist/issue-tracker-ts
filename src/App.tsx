// react-router-dom
import { Routes, Route } from "react-router-dom";
// react query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// pages
import HomePage from "./features/Home/pages/HomePage";
import AdminPage from "./features/Admin/pages/AdminPage";
import ProfilePage from "./features/Profile/pages/ProfilePage";
import { SigninPage, SignupPage } from "./features/Auth/pages";
import { CreateIssuePage, EditIssuePage } from "./features/Issues/pages";
// custom routes
import {
  ADMIN,
  CREATEISSUE,
  EDITISSUE,
  HOME,
  PROFILE,
  SIGNIN,
  SIGNUP,
} from "./common/utils/routes";
import { ThemeProviderCustom } from "./common/context";
import AuthUserProvider from "./firebase/auth/authProvider";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <AuthUserProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProviderCustom>
          <Routes>
            <Route path={HOME} element={<HomePage />} />
            <Route path={ADMIN} element={<AdminPage />} />
            <Route path={PROFILE} element={<ProfilePage />} />
            <Route path={SIGNIN} element={<SigninPage />} />
            <Route path={SIGNUP} element={<SignupPage />} />
            <Route path={CREATEISSUE} element={<CreateIssuePage />} />
            <Route path={EDITISSUE} element={<EditIssuePage />} />
          </Routes>
        </ThemeProviderCustom>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthUserProvider>
  );
}

export default App;
