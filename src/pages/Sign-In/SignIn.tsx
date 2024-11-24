import { Input } from "../../components/ui/input";
import CardFrame from "../../components/CardFrame/CardFrame";
import { useTranslation } from "react-i18next";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../supabase/auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()

  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")


  const { mutate:handleLogIn} = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: () => {
      navigate("/")
    }
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isEmailFilled = !!email
    const isPasswordFilled = !!password
    if (isEmailFilled && isPasswordFilled) {
      handleLogIn({email,password})
    }
    setEmail("")
    setPassword("")
  }



  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setPassword(value);
  };
  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setEmail(value);
  };

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <CardFrame className="w-[500px]">
        <form onSubmit={handleSubmit}>        
        <div className="flex items-center justify-center flex-col mb-8">
          <h1 className=" text-[#03050c] text-xl font-semibold dark:text-[#ffffff]">
            {t("log_to_bitblogs")}
          </h1>
          <p className="text-[#555969] font-thin">{t("credentials")}</p>
        </div>
        <div className="mb-2">
          <p className=" text-[#03050c] text-[16px] font-semibold mb-2 dark:text-[#ffffff]">
            {t("email")}
          </p>
          <Input type="email" placeholder="john@example.com" value={email} onChange={handleChangeEmail} />
        </div>
        <div className="mb-2">
          <p className=" text-[#03050c] text-[16px] font-semibold mb-2 dark:text-[#ffffff]">
            {t("password")}
          </p>
          <Input type="password" value={password} onChange={handleChangePassword} />
        </div>
        <button className="py-2 my-2 px-4 bg-buttonblue rounded-md text-white hover:bg-buttonblue-light w-[100%] ">
          {t("log_in")}
        </button>
        <div className="flex justify-between">
          <span className="text-buttonblue font-thin text-[14px] hover:underline">
            {t("forgot_password")}
          </span>
          <span className="text-[14px] font-thin dark:text-[#555969]">
            {t("dont_have_account")}
            <a href="/register" className="text-buttonblue">
              {t("sign_up")}
            </a>
          </span>
        </div>
        </form>
      </CardFrame>
    </div>
  );
};

export default SignIn;
