// mui 5
import BugReportIcon from "@mui/icons-material/BugReport";
// custom styles
import { StyledAppBar, StyledToolbar, StyledIcon } from "./styles";
// custom components
import BrandName from "../BrandName";
import LinkButton from "../LinkButton";
import { ToggleThemeButton } from "..";
// custom utils
import { HOME, PROFILE, SIGNIN, SIGNUP } from "../../utils/routes";

function Navbar() {
  return (
    <StyledAppBar position="fixed">
      <StyledToolbar>
        <BrandName
          to={HOME}
          label="Issue Tracker"
          icon={<BugReportIcon fontSize="large" />}
        />
        <StyledIcon>
          <ToggleThemeButton />
          <LinkButton to={PROFILE} label="Profile" />
          <LinkButton to={SIGNIN} label="Signin" />
          <LinkButton to={SIGNUP} label="Signup" />
        </StyledIcon>
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Navbar;
