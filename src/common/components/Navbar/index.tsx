// mui 5
import BugReportIcon from "@mui/icons-material/BugReport";
// custom styles
import { StyledAppBar, StyledToolbar, StyledIcon } from "./styles";
// custom components
import { BrandName } from "../BrandName";
import { LinkButton } from "../LinkButton";
import { ToggleThemeButton } from "..";
// custom utils
import {
  // ADMIN,
  CREATEISSUE,
  HOME,
  PROFILE,
  SIGNIN,
} from "../../utils/routes";
// custom hooks
// import { useAuth } from "../../../firebase/auth/hook";
import { useAuth } from "../../../entities/auth/hooks";

export function Navbar() {
  const { user } = useAuth();

  const SignedInContent = (
    <StyledIcon>
      <ToggleThemeButton />
      {/* <LinkButton to={ADMIN} label="Admin" /> */}
      <LinkButton to={HOME} label="Home" />
      <LinkButton to={CREATEISSUE} label="Create" />
      <LinkButton to={PROFILE} label="Profile" />
    </StyledIcon>
  );

  const SignedOutContent = (
    <StyledIcon>
      <ToggleThemeButton />
      <LinkButton to={HOME} label="Home" />
      <LinkButton to={SIGNIN} label="Signin" />
    </StyledIcon>
  );

  const NavContent = user ? SignedInContent : SignedOutContent;

  return (
    <StyledAppBar position="fixed">
      <StyledToolbar>
        <BrandName
          to={HOME}
          label="Issue Tracker"
          icon={<BugReportIcon fontSize="large" />}
        />
        {NavContent}
      </StyledToolbar>
    </StyledAppBar>
  );
}
