// react-router-dom
import { useNavigate } from "react-router-dom";
// react-query
import { useMutation, useQueryClient } from "@tanstack/react-query";
// custom types
import { IIssue, IIssueCreate } from "../types";
// custom api
import { issueApi } from "../api";
// custom utils
import { ISSUE_CACHENAME } from "../utils";
import { HOME } from "@common/utils/routes";

export function useCreateIssue() {
  console.log("%cuseCreateIssue", "color: orange");
  // Access the client
  const queryClient = useQueryClient();
  // react-router-dom logic
  const navigate = useNavigate();

  // fetch function
  const mutationFn = async (issue: IIssueCreate) =>
    await issueApi.create(issue);

  const { mutate, status, error } = useMutation<
    IIssue["id"],
    Error,
    IIssueCreate
  >({
    mutationFn: mutationFn,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [ISSUE_CACHENAME] });
      // redirect to home page
      navigate(HOME);
    },
  });

  return { createIssue: mutate, status, error };
}
