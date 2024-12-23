import { Input } from "@/components/ui/input";
import { userAtom } from "@/store/auth";
import { fillProfileInfo, getProfileInfo } from "@/supabase/account";
import { Database } from "@/supabase/supabase.types";
import { useMutation } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useHandleLogOut } from "@/react-query/mutation/auth";

type FormValues = {
  phone: string;
  nameKa: string;
  nameEn: string;
};

const ProfileView = () => {
  const { t } = useTranslation();

  const user = useAtomValue(userAtom);
  const [profile, setProfile] = useState<
    Database["public"]["Tables"]["profiles"]["Row"] | null
  >(null);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [avatar, setAvatar] = useState("");

  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      phone: "",
      nameKa: "",
      nameEn: "",
    },
  });

  const fetchProfileInfo = async (id: string | number) => {
    const res = await getProfileInfo(id);
    const profileData = res.data?.[0];
    if (profileData) {
      setProfile(profileData);
      setAvatar(profileData.avatar_url || "");
      reset({
        phone: profileData.phone_number || "",
        nameKa: profileData.full_name_ka || "",
        nameEn: profileData.full_name_en || "",
      });
    }
  };

  const { mutate: updateProfile } = useMutation({
    mutationKey: ["fill-profile-info"],
    mutationFn: fillProfileInfo,
    onSuccess: () => {
      if (user?.user?.id) {
        fetchProfileInfo(user.user.id);
      }
    },
  });

  const onSubmit = (data: FormValues) => {
    if (user?.user?.id) {
      updateProfile({
        id: user.user.id,
        avatar_url: avatar,
        phone_number: data.phone,
        full_name_en: data.nameEn,
        full_name_ka: data.nameKa,
      });
    }
  };

  useEffect(() => {
    if (user?.user?.id) {
      fetchProfileInfo(user.user.id);
    }
  }, [user]);

  const handleGenerateAvatar = async () => {
    const generateRandomSeed = () => {
      return Math.random().toString(36).substring(2, 15);
    };
    const seed = generateRandomSeed();
    const url = `https://api.dicebear.com/9.x/adventurer/svg?seed=${seed}`;
    setAvatar(url);
  };

  const { mutate: handleLogOut } = useHandleLogOut();

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <div className="w-[500px] flex flex-col gap-4">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Controller
            name="phone"
            control={control}
            rules={{
              required: "required",
              minLength: {
                value: 4,
                message: "min_length",
              },
              maxLength: {
                value: 15,
                message: "max_length",
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <Input
                  placeholder="Phone"
                  value={value}
                  ref={inputRef}
                  onChange={onChange}
                />
                {error && (
                  <p className="text-red-600">{t(error.message || "")}</p>
                )}{" "}
              </>
            )}
          />

          <Controller
            name="nameEn"
            control={control}
            rules={{
              required: "required",
              minLength: {
                value: 4,
                message: "min_length",
              },
              maxLength: {
                value: 15,
                message: "max_length",
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <Input
                  placeholder="Name (English)"
                  value={value}
                  onChange={onChange}
                />
                {error && (
                  <p className="text-red-600">{t(error.message || "")}</p>
                )}{" "}
              </>
            )}
          />

          <Controller
            name="nameKa"
            control={control}
            rules={{
              required: "required",
              minLength: {
                value: 4,
                message: "min_length",
              },
              maxLength: {
                value: 15,
                message: "max_length",
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <Input
                  placeholder="სახელი (ქართული)"
                  value={value}
                  onChange={onChange}
                />
                {error && (
                  <p className="text-red-600">{t(error.message || "")}</p>
                )}{" "}
              </>
            )}
          />

          <button
            type="button"
            className="text-xl font-bold"
            onClick={handleGenerateAvatar}
          >
            Generate Avatar
          </button>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>

        {profile && (
          <div className="mt-6 p-4 border rounded bg-gray-100 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">Profile</h1>
            <span className="flex gap-4">
              <p className="font-bold">Name (en):</p>
              <p>{profile.full_name_en}</p>
            </span>
            <span className="flex gap-4">
              <p className="font-bold">Name (ge):</p>
              <p>{profile.full_name_ka}</p>
            </span>
            <span className="flex gap-4">
              <p className="font-bold">Phone number:</p>
              <p>{profile.phone_number}</p>
            </span>
            <img className="w-[100px] h-[100px]" src={avatar} alt="avatar" />
            <div className="flex gap-8">
              <p
                className="text-green-600 cursor-pointer"
                onClick={() => inputRef.current?.focus()}
              >
                Change Profile
              </p>
              <p
                className="text-red-600 cursor-pointer"
                onClick={() => handleLogOut()}
              >
                Log Out
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileView;
