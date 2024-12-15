import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { userAtom } from "@/store/auth";
import { addBlog } from "@/supabase/blogs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { FormValues } from "../../types";

const CreateBlogForm: React.FC = () => {
  const user = useAtomValue(userAtom);
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      title_en: "",
      title_ka: "",
      description_en: "",
      description_ka: "",
      image: null,
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

  const { mutate: addBlogToList } = useMutation({
    mutationKey: ["add-blog"],
    mutationFn: addBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
      reset();
    },
  });

  return (
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
  );
};

export default CreateBlogForm;
