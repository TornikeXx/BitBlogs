import { addBlog } from "@/supabase/blogs";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useHandleAddingBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["add-blog"],
    mutationFn: addBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
    },
  });
};
