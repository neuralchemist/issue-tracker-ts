import { useFindAllUsers } from "../../../entities/user/hooks";
import { UserCard, UserStack } from "../components";

function UserListContainer() {
  const { users, status } = useFindAllUsers();

  return (
    <>
      {users ? (
        <UserStack users={users} card={UserCard} status={status} />
      ) : null}
    </>
  );
}

export default UserListContainer;
