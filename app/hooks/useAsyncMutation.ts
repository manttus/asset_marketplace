import { useMutation, useQueryClient } from "@tanstack/react-query";

type MutationPayload = {
  key: string[];
  fn: (data: any) => any;
  onSuccess?: (data: any) => void;
  onError?: (data: any) => void;
  invalidate?: string[];
};

export default function useAsyncMutation({
  key,
  fn,
  onSuccess,
  onError,
  invalidate,
}: MutationPayload) {
  const query = useQueryClient();
  return useMutation({
    mutationFn: fn,
    mutationKey: key,
    onSuccess,
    onError,
    onSettled: () => {
      query.invalidateQueries(invalidate);
    },
  });
}
