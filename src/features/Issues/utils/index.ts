import { IUser } from "../../../entities/user/types";
import {  IOptions } from "../types";


export const priority_options: IOptions = [
  {
    label: "High",
    value: "high",
  },

  {
    label: "Medium",
    value: "medium",
  },

  {
    label: "Low",
    value: "low",
  },
];




export function getOptionsFromAllUsers(
  all_users: IUser[],
  current_user: IUser
): IOptions {
  // filter current user from all users
  const other_users = all_users.filter((user) => user.id !== current_user.id);
  // convert to format suitable for dropdown
  const options = other_users.map((user) => ({
    label: user.username,
    value: user.id,
  }));

  return options;
}

export function findAssignedTo(all_users: IUser[], assigned_id: string): IUser {
  /**
   * extract  assigned_to  user using assigned_id from all_users
   */
  const assigned_to = all_users.find((user) => user.id === assigned_id);

  return assigned_to as IUser;
}
