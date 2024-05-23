import { useQuery } from "@tanstack/react-query";

type AsyncQuery = {
  fn: any;
  key: string[];
  enabled?: boolean;
  retry?: boolean;
  adapter?: (data: any) => any;
};

export function useAsyncQuery({
  fn,
  key,
  enabled = true,
  retry = true,
  adapter,
}: AsyncQuery) {
  return useQuery({
    queryFn: fn,
    queryKey: key,
    enabled: enabled,
    retry: retry,
    select: adapter,
  });
}
