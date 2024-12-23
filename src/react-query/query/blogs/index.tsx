import { FilterValue } from "@/pages/Write/types";
import { getBlogs } from "@/supabase/blogs";
import { useQuery } from "@tanstack/react-query";

export const useGetBlogs = (searchText: FilterValue) => {
  return useQuery({
    queryKey: ["blogs", searchText],
    queryFn: () => getBlogs(searchText),
  });
};
