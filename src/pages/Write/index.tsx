import { Input } from "@/components/ui/input";
import { userAtom } from "@/store/auth";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { Controller, useForm } from "react-hook-form";
import { addBlog, getBlogs } from "@/supabase/blogs";
import CardFrame from "@/components/CardFrame/CardFrame";
import { Button } from "@/components/ui/button";

type FormValues = {
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
  image: null | File;
};
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

const WritePage = () => {
  const user = useAtomValue(userAtom);

  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      title_en: "",
      title_ka: "",
      description_en: "",
      description_ka: "",
      image: null,
    },
  });

  const { data, refetch } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  const { mutate: addBlogToList } = useMutation({
    mutationKey: ["add-blog"],
    mutationFn: addBlog,
    onSuccess: () => {
      refetch();
      reset();
    },
  });

  const onSubmit = (formValues: FormValues) => {
    addBlogToList({
      title_en: formValues.title_en,
      title_ka: formValues.title_ka,
      description_en: formValues.description_en,
      description_ka: formValues.description_ka,
      image_url: formValues.image,
      user_id: user?.user?.id,
    });
  };

  return (
    <div className=" flex flex-col items-center justify-center my-7">
      <div className="w-[500px] flex flex-col gap-4">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex gap-2">
            <Controller
              name="title_ka"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="სათაური"
                  value={value}
                  onChange={onChange}
                  className="w-[50%]"
                />
              )}
            />

            <Controller
              name="title_en"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Tittle"
                  value={value}
                  onChange={onChange}
                  className="w-[50%]"
                />
              )}
            />
          </div>

          <div className="flex gap-2">
            <Controller
              name="description_ka"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input placeholder="აღწერა" value={value} onChange={onChange} />
              )}
            />

            <Controller
              name="description_en"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Description"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </div>

          <Controller
            name="image"
            control={control}
            render={({ field: { onChange } }) => (
              <Input
                type="file"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  onChange(file);
                }}
              />
            )}
          />

          <Button
            type="submit"
            className="bg-buttonblue hover:bg-buttonblue-light text-white py-2 px-4 rounded"
          >
            Submit
          </Button>
        </form>
      </div>
      <div className="flex flex-col gap-5 mt-3 min-h-[50vh]">
        {data?.map((blog) => {
          const imgUrl = blog?.image_url
            ? `${import.meta.env.VITE_SUPABASE_IMAGES_STORAGE_URL}/${blog?.image_url}`
            : "";
          return (
            <>
              <CardFrame key={blog.user_id}>
                <img
                  src={
                    imgUrl ||
                    "https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&amp;width=400"
                  }
                  className="rounded-lg object-cover w-full h-[200px]"
                />
                <div className="my-2">
                  <h1 className=" text-[#03050c] text-xl font-semibold">
                    {blog.title_en || "Tittle"}
                  </h1>
                  <h1 className=" text-[#555969] text-xl font-semibold">
                    {blog.title_ka || "სათაური"}
                  </h1>
                </div>
                <div>
                  <p className="text-[#555969] font-thin">
                    {blog.description_en || "Description"}
                  </p>
                  <p className="text-[#555969] font-thin">
                    {blog.description_ka || "აღწერა"}
                  </p>
                </div>
              </CardFrame>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default WritePage;
