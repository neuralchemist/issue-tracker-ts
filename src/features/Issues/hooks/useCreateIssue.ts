// react-query
import { useMutation, useQueryClient } from "@tanstack/react-query";

// react-router-dom
import { useNavigate } from "react-router-dom";
//
import { HOME } from "../../../common/utils/routes";
import { IIssue, IIssueCreatePartial } from "../../../firebase/issues/types";
import IssuesService from "../../../firebase/issues/services";
import { ISSUE_CACHENAME } from "../utils";

const issueService = new IssuesService();

function useCreateIssue() {
  // Access the client
  const queryClient = useQueryClient();

  // react-router-dom logic
  const navigate = useNavigate();
  // fetch function
  const mutationFn = async (partialIssue: IIssueCreatePartial) =>
    await issueService.create(partialIssue);

  const {
    mutate: createIssue,
    status,
    error,
  } = useMutation<IIssue["id"], Error, IIssueCreatePartial>({
    mutationFn: mutationFn,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [ISSUE_CACHENAME] });
      // redirect to home page
      navigate(HOME);
    },
  });

  return { createIssue, status, error };
}

export default useCreateIssue;
