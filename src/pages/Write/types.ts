export type Blog = {
  created_at: string | null;
  description_en: string | null;
  description_ka: string | null;
  id: number | null;
  image_url: File | null;
  title_en: string | null;
  title_ka: string | null;
  user_id: string | null;
};

export type FilterValue = {
  searchText: string;
};

export type uploadPayload = {
  title_en: string;
  title_ka: string;
  description_en: string;
  description_ka: string;
  image_url: File | null;
  user_id: string;
  id?: number;
  created_at?: string;
};

export type FormValues = {
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
  image: null | File;
};
