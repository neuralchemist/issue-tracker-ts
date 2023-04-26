// mui 5
import BugReportIcon from "@mui/icons-material/BugReport";
// custom styles
import { StyledAppBar, StyledToolbar, StyledIcon } from "./styles";
// custom components
import BrandName from "../BrandName";
import LinkButton from "../LinkButton";
import { ToggleThemeButton } from "..";
// custom utils
import { ADMIN, CREATEISSUE, HOME, PROFILE, SIGNIN } from "../../utils/routes";
import { useAuth } from "../../../firebase/auth/hook";

function Navbar() {
  // custom hook
  const { authUser } = useAuth();

  const SignedInContent = (
    <StyledIcon>
      <ToggleThemeButton />
      <LinkButton to={ADMIN} label="Admin" />
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

  const NavContent = authUser !== null ? SignedInContent : SignedOutContent;
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

export default Navbar;
