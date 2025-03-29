export {};
// import { Avatar, Select, SelectProps } from "antd";
// import { differenceBy, flatMap, uniqBy } from "lodash-es";
// import { ReactNode } from "react";

// import { listMinimalUsers } from "~/__generated__/hooks/useListMinimalUsers.ts";
// import { genListMinimalUsersKey } from "~/__generated__/hooks/useListMinimalUsers.ts";
// import {
//   SortOrder,
//   UserFilter,
//   UserMinimalResponse,
//   UserMinimalView,
//   UserSort,
//   UserStatus,
// } from "~/__generated__/types/swagger.type";
// import { useDebounceState } from "~shared/hooks/useDebounceState";
// import { useInfiniteQuery } from "~shared/hooks/useInfiniteQuery";
// import { ensureArray } from "~shared/utils/array.util";
// import { onScrollToEnd } from "~shared/utils/event.util";

// export type UserMinimalViewWithEmail = UserMinimalView & { email?: string };
// type OptionUser = {
//   label?: ReactNode;
//   value?: string;
//   disabled?: boolean;
//   user?: UserMinimalResponse;
// };
// type SelectPersonProps = SelectProps<string, OptionUser> & {
//   filter?: UserFilter;
//   sort?: UserSort;
//   includes?: UserMinimalResponse | Array<UserMinimalResponse>;
//   excludes?: UserMinimalResponse | Array<UserMinimalResponse>;
//   renderLabel?: (person: UserMinimalResponse) => ReactNode;
// };

// export function SelectPerson({
//   filter = { status: UserStatus.Active },
//   sort = { name: SortOrder.Asc },
//   includes,
//   excludes,
//   onSearch,
//   onDropdownVisibleChange,
//   renderLabel = (user) => (
//     <div className="flex items-center gap-2">
//       <Avatar src={user.pictureUrl} size={24} className="shrink-0" />
//       <span>{user.name}</span>
//       <span className="text-gray-10 truncate">{user?.email}</span>
//     </div>
//   ),
//   ...props
// }: SelectPersonProps) {
//   const [search, setSearch] = useDebounceState<string>();

//   const { data, isLoading, isFetched, fetchNextPage } = useInfiniteQuery({
//     queryKey: genListMinimalUsersKey({ body: { search, filter, sort } }),
//     queryFn: ({ pageParam }) =>
//       listMinimalUsers({ body: { ...pageParam, search, filter, sort } }),
//     enabled: !!search,
//   });

//   const options: SelectPersonProps["options"] = [
//     ...differenceBy(
//       uniqBy(
//         [...flatMap(data?.pages, (p) => p.data), ...ensureArray(includes)],
//         (p) => p.id,
//       ),
//       ensureArray(excludes),
//       (p) => p.id,
//     ).map((person) => ({
//       label: renderLabel(person),
//       value: person.id,
//       user: person,
//     })),
//     ...(isLoading ? [{ value: "Loading...", disabled: true }] : []),
//   ];

//   return (
//     <Select
//       showSearch
//       options={options}
//       onSearch={(str) => {
//         setSearch(str);
//         onSearch?.(str);
//       }}
//       onClear={() => setSearch("")}
//       filterOption={false}
//       onPopupScroll={(e) => onScrollToEnd(e, fetchNextPage)}
//       onDropdownVisibleChange={(...args) => {
//         !isFetched && fetchNextPage();
//         onDropdownVisibleChange?.(...args);
//       }}
//       {...props}
//     />
//   );
// }
