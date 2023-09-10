// react router
import { useLocation } from "react-router-dom";
import IssueForm from "../components/IssueForm/IssueForm";
import { findAssignedTo, getOptionsFromAllUsers } from "../utils";
import { IOptions } from "../../../common/types";
import { ErrorMessage } from "../../../common/components";
import { useAuth } from "../../../firebase/auth/hook";
// custom types
import { IIssue, IIssueUpdate } from "../../../entities/issue/types";
import { IUser } from "../../../entities/user/types";
// custom hooks
import { useUpdateIssue } from "../../../entities/issue/hooks";
import { useFindAllUsers } from "../../../entities/user/hooks";

export type IIssueUpdateForm = Pick<
  IIssue,
  "title" | "description" | "priority" | "assigned_id"
>;

function EditIssueContainer() {
  // hook to fetch all users form users collection
  const { users, status: usersStatus } = useFindAllUsers();
  // hook to update issue
  const { updateIssue, status: issuesStatus } = useUpdateIssue();
  // current logged in user user
  const { authUser } = useAuth();

  // react-router-logic
  const location = useLocation();
  const { issue }: { issue: IIssue } = location.state;

  let allUserOptions: IOptions = [];
  let allUsers: IUser[];

  if (usersStatus === "loading") {
    return <ErrorMessage message="loading users" />;
  }

  if (usersStatus === "error") {
    return <ErrorMessage message="failed to load users" />;
  }

  // empty collection message
  if (users && users.length === 0) {
    return <ErrorMessage message="No users in collection" />;
  }
  // no user to assign to
  if (users && users.length === 1) {
    return <ErrorMessage message="No users to assign to" />;
  }

  if (usersStatus === "success") {
    allUsers = users as IUser[];
    const currentUser = authUser as IUser;
    allUserOptions = getOptionsFromAllUsers(allUsers, currentUser);
  }

  // extract default values from issue
  const defaultIssueValues: IIssueUpdateForm = {
    assigned_id: issue.assigned_id,
    title: issue.title,
    description: issue.description,
    priority: issue.priority,
  };

  const onSubmit = async (values: IIssueUpdateForm) => {
    const assigned_user = findAssignedTo(allUsers, values.assigned_id);
    // add rest of the data
    const _issue: IIssueUpdate = {
      ...values,
      assigned_to: assigned_user.username,
    };

    // add to database
    updateIssue(issue.id, _issue);
  };

  return (
    <IssueForm
      isLoading={issuesStatus === "loading"}
      isError={issuesStatus === "error"}
      submitButtonName="edit issue"
      onSubmit={onSubmit}
      defaultValues={defaultIssueValues}
      allUserOptions={allUserOptions}
    />
  );
}

export default EditIssueContainer;
