import { Input } from "@/components/ui/input";
import { userAtom } from "@/store/auth";
import { fillProfileInfo, getProfileInfo } from "@/supabase/account";
import { logout } from "@/supabase/auth";
import { Database } from "@/supabase/supabase.types";
import { useMutation } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileView = () => {
  const user = useAtomValue(userAtom);
  const navigate = useNavigate();
  const [profile, setProfile] = useState<
    Database["public"]["Tables"]["profiles"]["Row"] | null
  >(null);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const [phone, setPhone] = useState("");
  const [nameKa, setNameKa] = useState("");
  const [nameEn, setNameEn] = useState("");
  const [avatar, setAvatar] = useState("");

  const fetchProfileInfo = async (id: string | number) => {
    const res = await getProfileInfo(id);
    const profileData = res.data?.[0];
    if (profileData) {
      setProfile(profileData);
      setInitialFormsValue(profileData);
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

  const handleSubmit = () => {
    if (user?.user?.id) {
      updateProfile({
        id: user.user.id,
        avatar_url: avatar,
        phone_number: phone,
        full_name_en: nameEn,
        full_name_ka: nameKa,
      });
    }
  };

  useEffect(() => {
    if (user?.user?.id) {
      fetchProfileInfo(user.user.id);
    }
  }, [user]);

  const setInitialFormsValue = (profile: any) => {
    setPhone(profile.phone_number || "");
    setNameEn(profile.full_name_en || "");
    setNameKa(profile.full_name_ka || "");
    setAvatar(profile.avatar_url || "");
  };

  const handleGenerateAvatar = async () => {
    const generateRandomSeed = () => {
      return Math.random().toString(36).substring(2, 15);
    };
    const seed = generateRandomSeed();
    const url = `https://api.dicebear.com/9.x/adventurer/svg?seed=${seed}`;
    setAvatar(url);
  };

  const { mutate: handleLogOut } = useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
    onSuccess: () => navigate("/login"),
  });

  const handleChangeprofile = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <div className="w-[500px] flex flex-col gap-4">
        <Input
          placeholder="Phone"
          ref={inputRef}
          value={phone}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPhone(e.target.value)
          }
        />
        <Input
          placeholder="Name"
          value={nameEn}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNameEn(e.target.value)
          }
        />
        <Input
          placeholder="სახელი"
          value={nameKa}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNameKa(e.target.value)
          }
        />
        <button className="text-xl font-bold " onClick={handleGenerateAvatar}>
          Generate Avatar
        </button>

        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>

        {profile && (
          <div className="mt-6 p-4 border rounded bg-gray-100 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">Profile</h1>
            <span className="flex gap-4">
              <p className="font-bold">Name(en):</p>
              <p>{profile.full_name_en}</p>
            </span>
            <span className="flex gap-4">
              <p className="font-bold">Name(ge):</p>
              <p>{profile.full_name_ka}</p>
            </span>
            <span className="flex gap-4">
              <p className="font-bold">Phone number:</p>
              <p>{profile.phone_number}</p>
            </span>
            <img className="w-[100px] h-[100px]" src={avatar} alt="" />
            <div className="flex gap-8">
              <p
                onClick={handleChangeprofile}
                className="text-green-600 cursor-pointer"
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
