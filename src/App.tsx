// react-router-dom
import { Routes, Route } from "react-router-dom";
// react query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// pages
import {
  // AdminPage,
  ProfilePage,
  SigninPage,
  SignupPage,
  CreateIssuePage,
  EditIssuePage,
  HomePage,
} from "@pages/index";
// custom routes
import {
  // ADMIN,
  CREATEISSUE,
  EDITISSUE,
  HOME,
  PROFILE,
  SIGNIN,
  SIGNUP,
} from "@common/utils/routes";
import { ThemeProviderCustom } from "@common/context";
// custom contexts
import { AuthProvider } from "@entities/auth/context";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProviderCustom>
          <Routes>
            <Route path={HOME} element={<HomePage />} />
            {/* <Route path={ADMIN} element={<AdminPage />} /> */}
            <Route path={PROFILE} element={<ProfilePage />} />
            <Route path={SIGNIN} element={<SigninPage />} />
            <Route path={SIGNUP} element={<SignupPage />} />
            <Route path={CREATEISSUE} element={<CreateIssuePage />} />
            <Route path={EDITISSUE} element={<EditIssuePage />} />
          </Routes>
        </ThemeProviderCustom>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
