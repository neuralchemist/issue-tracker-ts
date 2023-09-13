// custom components
import { ErrorMessage } from "@common/components";
import { IssueForm } from "../IssueForm";
// custom utils
import { findAssignedTo, getOptionsFromAllUsers } from "../../utils";
// custom hooks
import { useFindAllUsers } from "@entities/user/hooks";
import { useCreateIssue } from "@entities/issue/hooks";
import { useAuth } from "@entities/auth/hooks";
// custom types
import { IIssueForm, IOptions } from "../../types";
import { IUser } from "@entities/user/types";
import { IIssueCreate } from "@entities/issue/types";

const defaultValues: IIssueForm = {
  title: "",
  description: "",
  priority: "low",
  assigned_id: "",
};

export function CreateIssueForm() {
  const { users, status: usersStatus } = useFindAllUsers();
  const { createIssue, status: issuesStatus } = useCreateIssue();
  // current logged in user user
  const { user } = useAuth();

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

  const onSubmit = async (values: IIssueForm) => {
    const assigned_user = findAssignedTo(allUsers, values.assigned_id);
    // add rest of the data
    const _issue: IIssueCreate = {
      ...values,
      assigned_to: assigned_user.username,
      author_id: user?.id as string,
      author: user?.username as string,
      resolved: false,
    };

    // add to firestore
    createIssue(_issue);
  };

  return (
    <IssueForm
      isLoading={issuesStatus === "loading"}
      isError={issuesStatus === "error"}
      submitButtonName="create issue"
      onSubmit={onSubmit}
      defaultValues={defaultValues}
      allUserOptions={allUserOptions}
    />
  );
}
