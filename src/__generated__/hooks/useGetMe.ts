import { useQuery } from "@tanstack/react-query";

import { QueryProps } from "~/__generated__/types/api-base.type";
import { UserResponse } from "~/__generated__/types/swagger.type";
import { authClient as client } from "~/auth/services/client.service";
import { DeepPartial } from "~shared/types/base.type";
import { flattenObject } from "~shared/utils/object.util";

export type GetMeInput = { queries?: { shouldGetFullDetail?: boolean | null } };

export type GetMeResponse = UserResponse;

export type UseGetMeProps = QueryProps<GetMeResponse, GetMeInput>;

export const genGetMeKey = (input: DeepPartial<GetMeInput>) => ["get", "/api/user/me", flattenObject(input)];

export async function getMe({ queries }: GetMeInput) {
  const { data } = await client<GetMeResponse>({
    method: "get",
    url: `/api/user/me`,
    params: queries,
  });

  return data;
}

export function useGetMe({ queries, ...options }: UseGetMeProps = {}) {
  return useQuery({
    queryKey: genGetMeKey({ queries }),
    queryFn: () => getMe({ queries }),
    ...options,
  });
}
