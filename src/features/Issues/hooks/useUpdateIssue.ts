// react-query
import { useMutation, useQueryClient } from "@tanstack/react-query";

// react-router-dom
import { useNavigate } from "react-router-dom";
//
import { HOME } from "../../../common/utils/routes";
import IssuesService from "../../../firebase/issues/services";
import { ISSUE_CACHENAME } from "../utils";
import {
  IIssue,
  IIssueUpdateById,
  IIssueUpdatePartial,
} from "../../../firebase/issues/types";

const issueService = new IssuesService();

function useUpdateIssue() {
  // Access the client
  const queryClient = useQueryClient();
  // react-router-dom logic
  const navigate = useNavigate();

  // fetch function
  const mutationFn = async ({ id, partialIssue }: IIssueUpdateById) =>
    await issueService.updateById({ id, partialIssue });

  const {
    mutate: updateIssue,
    status,
    error,
  } = useMutation<IIssue["id"], Error, IIssueUpdateById>({
    mutationFn: mutationFn,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [ISSUE_CACHENAME] });
      // redirect to home page
      navigate(HOME);
    },
  });

  const updateIssueById = (id: string, partialIssue: IIssueUpdatePartial) =>
    updateIssue({ id, partialIssue });

  return { updateIssueById, status, error };
}

export default useUpdateIssue;
