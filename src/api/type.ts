import { QueryFunctionContext, QueryKey } from "@tanstack/react-query";

export type Pagination = {
  total: number;
  page: number;
  size: number;
};

export type QueryFunctionCtx = QueryFunctionContext<QueryKey, Pick<Pagination, "page" | "size">>;
