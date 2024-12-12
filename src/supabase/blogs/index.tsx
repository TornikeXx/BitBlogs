import { supabase } from "..";

type uploadPayload = {
  title_en: string;
  title_ka: string;
  description_en: string;
  description_ka: string;
  image_url: File | null;
  user_id: string;
  id?: number;
  created_at?: string;
};

export const getBlogs = async () => {
  const res = await supabase.from("blogs").select("*");
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
