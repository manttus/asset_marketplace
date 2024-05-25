import { useMutation } from "@tanstack/react-query";

type MutationPayload = {
  key: string[];
  fn: (data: any) => any;
  onSuccess?: (data: any) => void;
  onError?: (data: any) => void;
};

export default function useAsyncMutation({
  key,
  fn,
  onSuccess,
  onError,
}: MutationPayload) {
  return useMutation({
    mutationFn: fn,
    mutationKey: key,
    onSuccess,
    onError,
  });
}
