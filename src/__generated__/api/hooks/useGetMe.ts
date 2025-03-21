import { useQuery } from "@tanstack/react-query";

import { QueryProps } from "~/__generated__/api/types/base";
import { UserResponse } from "~/__generated__/api/types/swagger";
import { authClient as client } from "~/auth/services/client.service";
import { DeepPartial } from "~shared/types/base.type";

export type GetMeInput = { queries?: { shouldGetFullDetail: boolean } };
export type GetMeResponse = UserResponse;
export type UseGetMeProps = QueryProps<GetMeResponse, GetMeInput>;

export const genGetMeKey = ({ queries }: DeepPartial<GetMeInput> = {}) => [
  "GET",
  "/api/user/me",
  ...Object.values({ queries }).filter(Boolean),
];

export async function getMe({ queries }: GetMeInput): Promise<GetMeResponse> {
  const { data } = await client<GetMeResponse>({
    method: "GET",
    url: `/api/user/me`,

    params: queries,
  });

  return data;
}

export function useGetMe(
  { queries, ...options }: UseGetMeProps = {
    queries: { shouldGetFullDetail: false },
  },
) {
  return useQuery({
    queryKey: genGetMeKey({ queries }),
    queryFn: () => getMe({ queries }),
    staleTime: 3 * 60 * 1000,
    ...options,
  });
}
