import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect } from "react";

import { BaseError } from "@shared/types/error.type";

export type ExampleInput = {
  name: string;
};

export type ExampleResponse = {
  message: string;
};

export type UseExampleProps = Omit<
  UseMutationOptions<ExampleResponse, AxiosError<BaseError>, ExampleInput>,
  "mutationFn"
> & {
  onError?: (error: AxiosError<BaseError>) => void;
};

export async function mutationFn(_input: ExampleInput): Promise<ExampleResponse> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  // const { data } = await client<ExampleResponse>({
  //   method: "POST",
  //   url: "/api/example",
  // });

  return {
    message: "Hello World",
  };
}

export function useExampleMutation({ onError, ...options }: UseExampleProps = {}) {
  const mutation = useMutation({
    mutationFn,
    ...options,
  });

  const { error } = mutation;

  useEffect(() => {
    error && onError?.(error);
  }, [error, onError]);

  return mutation;
}
