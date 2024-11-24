import React, { useEffect, useState } from "react";
import { LangDropdown } from "../Dropdowns/LangDropdown";
import searchBtn from "../../assets/search.svg";
import { useNavigate } from "react-router-dom";
import { ModeToggle } from "../Dropdowns/Mode-toggle";
import { useTranslation } from "react-i18next";
import { useAtomValue } from "jotai";
import { userAtom } from "@/store/auth";
import { getProfileInfo } from "@/supabase/account";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/login");
  };
  const { t } = useTranslation();
  const user = useAtomValue(userAtom)

  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
    
  useEffect(() => {
    if (user) {
      getProfileInfo(user.user.id)
        .then((res) => {
          if (res.data) {
            setAvatarUrl(res.data[0].avatar_url);
          }
        })
    }
  }, [user]);


  return (
    <div className="flex justify-between mx-auto px-4 py-4 items-center border-b border-inherit">
      <a href="/" className="text-2xl font-bold">
        BitBlogs
      </a>
      
      <div className="text-[#555868] flex items-center gap-3">
        <a href="/" className="">
          {t("home")}
        </a>
        <a href=""> {t("write")}</a>
        <a href="/about"> {t("about")}</a>
      </div>
      <div className="flex items-center  gap-4">
        <div className="dark:invert dark:brightness-75">
          <img src={searchBtn} alt="" className="cursor-pointer" />
        </div>

      {user ?
       
            <button onClick={() => { navigate("/profile") }}>
              <img className="w-[40px]" src={avatarUrl ?? "https://via.placeholder.com/150"} alt="" />
            </button>
        
          :
        <button
          className="py-2 px-4 bg-buttonblue rounded-md text-white hover:bg-buttonblue-light"
          onClick={handleNavigate}
        >
          {t("sign_in")}
          </button>
        }

        <ModeToggle />
        <LangDropdown />
      </div>
    </div>
  );
};

export default Header;
