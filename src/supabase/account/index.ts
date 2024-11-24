import { supabase } from "..";
import { Database } from "../supabase.types";

export const fillProfileInfo = async (
  payload: Database["public"]["Tables"]["profiles"]["Insert"],
) => {
  const res = await supabase.from("profiles").upsert(payload);
  return res;
};

export const getProfileInfo = async (id: string | number) => {
  const res = await supabase.from("profiles").select("*").eq("id", id);
  return res;
};
