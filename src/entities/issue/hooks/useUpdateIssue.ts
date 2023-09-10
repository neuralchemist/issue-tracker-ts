// react-router-dom
import { useNavigate } from "react-router-dom";
// react-query
import { useMutation, useQueryClient } from "@tanstack/react-query";
// custom utils
import { HOME } from "../../../common/utils/routes";
import { ISSUE_CACHENAME } from "../utils";
// custom types
import { IIssue, IIssueUpdate } from "../types";
// custom api
import { issueApi } from "../api";

interface IIssueUpdateById {
  id: IIssue["id"];
  issue: IIssueUpdate;
}

export function useUpdateIssue() {
  console.log("%cuseUpdateIssue", "color: orange");
  // Access the client
  const queryClient = useQueryClient();
  // react-router-dom logic
  const navigate = useNavigate();

  // fetch function
  const mutationFn = async ({ id, issue }: IIssueUpdateById) =>
    await issueApi.update(id, issue);

  const { mutate, status, error } = useMutation<
    IIssue["id"],
    Error,
    IIssueUpdateById
  >({
    mutationFn: mutationFn,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [ISSUE_CACHENAME] });
      // redirect to home page
      navigate(HOME);
    },
  });

  const updateIssue = (id: string, issue: IIssueUpdate) =>
    mutate({ id, issue });

  return { updateIssue, status, error };
}
