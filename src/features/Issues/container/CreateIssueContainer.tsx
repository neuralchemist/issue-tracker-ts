import IssueForm from "../components/IssueForm/IssueForm";
import {
  defaultIssueValues,
  findAssignedTo,
  getOptionsFromAllUsers,
} from "../utils";
import { IOptions } from "../../../common/types";
import { IIssueCreateForm } from "../types/issues.types";
import { IIssueCreatePartial } from "../../../firebase/issues/types";
import { useFindAllUsers } from "../../Users/hooks";
import { useCreateIssue } from "../hooks";
import { ErrorMessage } from "../../../common/components";
import { useAuth } from "../../../firebase/auth/hook";
import { IUser } from "../../../firebase/users/types";

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
    const partialIssue: IIssueCreatePartial = {
      ...values,
      assigned_to: assigned_user.username,
      author_id: authUser?.id as string,
      author: authUser?.username as string,
      resolved: false,
    };

    // add to firestore
    createIssue(partialIssue);
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
