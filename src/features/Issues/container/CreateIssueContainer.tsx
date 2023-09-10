import IssueForm from "../components/IssueForm/IssueForm";
import {
  defaultIssueValues,
  findAssignedTo,
  getOptionsFromAllUsers,
} from "../utils";
import { IOptions } from "../../../common/types";
import { ErrorMessage } from "../../../common/components";
import { useAuth } from "../../../firebase/auth/hook";
import { IUser } from "../../../firebase/users/types";
// custom types
import { IIssue, IIssueCreate } from "../../../entities/issue/types";
// custom hooks
import { useFindAllUsers } from "../../../entities/user/hooks";
import { useCreateIssue } from "../../../entities/issue/hooks";

export type IIssueCreateForm = Pick<
  IIssue,
  "title" | "description" | "priority" | "assigned_id"
>;

function CreateIssueContainer() {
  // hook to fetch all users form users collection
  const { users, status: usersStatus } = useFindAllUsers();
  // hook to create issue
  const { createIssue, status: issuesStatus } = useCreateIssue();
  // current logged in user user
  const { authUser } = useAuth();

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

  const onSubmit = async (values: IIssueCreateForm) => {
    const assigned_user = findAssignedTo(allUsers, values.assigned_id);
    // add rest of the data
    const _issue: IIssueCreate = {
      ...values,
      assigned_to: assigned_user.username,
      author_id: authUser?.id as string,
      author: authUser?.username as string,
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
      defaultValues={defaultIssueValues}
      allUserOptions={allUserOptions}
    />
  );
}

export default CreateIssueContainer;
