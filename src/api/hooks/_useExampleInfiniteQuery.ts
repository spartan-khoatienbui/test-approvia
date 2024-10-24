import {
  InfiniteData,
  QueryKey,
  UndefinedInitialDataInfiniteOptions,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { isNil } from "lodash-es";

import { QueryFunctionCtx } from "@api/type";
import { BaseError } from "@shared/types/error.type";

export type ExampleInfiniteInput = {
  name: string;
};

export type ExampleInfiniteResponse = {
  message: string;

  // Required
  pagination: {
    currentPage: number;
    totalPages: number;
    totalRecords: number;
  };
};

export type UseExampleInfiniteProps = Omit<
  UndefinedInitialDataInfiniteOptions<
    ExampleInfiniteResponse,
    BaseError,
    InfiniteData<ExampleInfiniteResponse>,
    QueryKey,
    { page: number; size: number }
  >,
  "queryKey" | "queryFn" | "getPreviousPageParam" | "getNextPageParam" | "initialPageParam"
> & {
  input: ExampleInfiniteInput;
};

export const EXAMPLE_INFINITE_KEY = "example-infinite";

export async function fetchFn(
  { pageParam: _ }: QueryFunctionCtx,
  _input: ExampleInfiniteInput
): Promise<ExampleInfiniteResponse> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  // const { page, size } = pageParam;
  // const { data } = await client<ExampleInfiniteResponse>({
  //   method: "GET",
  //   url: "/api/example?limit=${size}&skip=${(page - 1) * size}",
  // });

  return {
    message: "Hello World",
    pagination: {
      currentPage: 1,
      totalPages: 1,
      totalRecords: 10,
    },
  };
}

export function useExampleInfiniteQuery({ input, ...options }: UseExampleInfiniteProps) {
  return useInfiniteQuery({
    queryKey: [EXAMPLE_INFINITE_KEY],
    queryFn: (ctx) => fetchFn(ctx, input),
    initialPageParam: { page: 1, size: 10 },
    getNextPageParam: ({ pagination = {} }) => {
      const { currentPage, totalPages } = pagination;

      if (isNil(currentPage) || isNil(totalPages)) return;
      if (currentPage >= totalPages) return;

      return {
        page: currentPage + 1,
        size: 10,
      };
    },
    getPreviousPageParam: ({ pagination = {} }) => {
      const { currentPage, totalPages } = pagination;

      if (isNil(currentPage) || isNil(totalPages)) return;
      if (currentPage <= 1) return;

      return {
        page: currentPage - 1,
        size: 10,
      };
    },
    ...options,
  });
}
