import { FilterValue, uploadPayload } from "@/pages/Write/types";
import { supabase } from "..";

export const getBlogs = async (searchValue: FilterValue) => {
  const res = await supabase
    .from("blogs")
    .select("*")
    .or(
      `title_en.ilike.%${searchValue.searchText}%,title_ka.ilike.%${searchValue.searchText}%`,
    );
  return res.data;
};

export const addBlog = async (payload: uploadPayload) => {
  try {
    let imageUrl: string | null = null;

    if (payload.image_url) {
      const file = payload.image_url as File;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("blog_images")
        .upload(file.name, file);

      if (uploadError) {
        throw new Error(`Image upload failed: ${uploadError.message}`);
      }

      imageUrl = uploadData?.path ? `blog_images/${uploadData.path}` : null;
    }

    const { data, error } = await supabase.from("blogs").insert({
      title_en: payload.title_en,
      title_ka: payload.title_ka,
      description_en: payload.description_en,
      description_ka: payload.description_ka,
      image_url: imageUrl,
      user_id: payload.user_id,
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
