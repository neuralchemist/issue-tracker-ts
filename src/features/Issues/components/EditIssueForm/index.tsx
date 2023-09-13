// react router
import { useLocation } from "react-router-dom";
// custom hooks
import { useFindAllUsers } from "../../../../entities/user/hooks";
import { useUpdateIssue } from "../../../../entities/issue/hooks";
import { useAuth } from "../../../../entities/auth/hooks";
// custom types
import { IIssue, IIssueUpdate } from "../../../../entities/issue/types";
import { IIssueForm, IOptions } from "../../types";
import { IUser } from "../../../../entities/user/types";
// custom components
import { ErrorMessage } from "../../../../common/components";
import { IssueForm } from "../IssueForm";
// custom utils
import { findAssignedTo, getOptionsFromAllUsers } from "../../utils";

export function EditIssueForm() {
  const { users, status: usersStatus } = useFindAllUsers();
  const { updateIssue, status: issuesStatus } = useUpdateIssue();
  // current logged in user user
  const { user } = useAuth();

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
    allUserOptions = getOptionsFromAllUsers(allUsers, user as IUser);
  }

  // extract default values from issue
  const defaultValues: IIssueForm = {
    assigned_id: issue.assigned_id,
    title: issue.title,
    description: issue.description,
    priority: issue.priority,
  };

  const onSubmit = async (values: IIssueForm) => {
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
      defaultValues={defaultValues}
      allUserOptions={allUserOptions}
    />
  );
}
