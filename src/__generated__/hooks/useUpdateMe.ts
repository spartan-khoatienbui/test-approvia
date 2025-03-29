import { useMutation } from "@tanstack/react-query";

import { MutationProps } from "~/__generated__/types/api-base.type";
import { UserUpdateRequest, UserResponse } from "~/__generated__/types/swagger.type";
import { authClient as client } from "~/auth/services/client.service";

export type UpdateMeInput = { body: UserUpdateRequest };

export type UpdateMeResponse = UserResponse;

export type UseUpdateMeProps = MutationProps<UpdateMeResponse, UpdateMeInput>;

export const genUpdateMeKey = () => ["put", "/api/user/me"];

export async function updateMe({ body }: UpdateMeInput) {
  const { data } = await client<UpdateMeResponse>({
    method: "put",
    url: `/api/user/me`,
    data: body,
  });

  return data;
}

export function useUpdateMe(options: UseUpdateMeProps = {}) {
  return useMutation({
    mutationKey: genUpdateMeKey(),
    mutationFn: updateMe,
    ...options,
  });
}
