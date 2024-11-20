import { Input } from "../../components/ui/input";
import CardFrame from "../../components/CardFrame/CardFrame";
import { useTranslation } from "react-i18next";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../supabase/auth";
const SignUp = () => {
  const { t } = useTranslation();

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [correctPassword, setCorrectPassword] = useState("")

  const { mutate:handleRegister} = useMutation({
    mutationKey: ["register"],
    mutationFn:register
  })


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const passwordAreNotSame = password.trim() !== correctPassword.trim();
    if (passwordAreNotSame) {
     alert("passwords must match")
    return;
    }

    handleRegister({email,password})

    setName("")
    setEmail("")
    setPassword("")
    setCorrectPassword("")
  }

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setName(value);
  };
  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setEmail(value);
  };
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setPassword(value);
  };
  const handleChangCorrectPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setCorrectPassword(value);
  };

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <CardFrame className="w-[500px]">
        <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center flex-col mb-8">
          <h1 className=" text-[#03050c] text-xl font-semibold dark:text-[#ffffff]">
            {t("sign_up_for_bitblogs")}
          </h1>
          <p className="text-[#555969] font-thin">{t("create_account")} </p>
        </div>
        <div className="mb-2">
          <p className=" text-[#03050c] text-[16px] font-semibold mb-2 dark:text-[#ffffff]">
            {t("name")}{" "}
          </p>
          <Input placeholder="john Doe" value={name} onChange={handleChangeName} />
        </div>
        <div className="mb-2">
          <p className=" text-[#03050c] text-[16px] font-semibold mb-2 dark:text-[#ffffff]">
            {t("email")}{" "}
          </p>
          <Input type="email" placeholder="john@example.com" value={email} onChange={handleChangeEmail}  />
        </div>
        <div className="mb-2">
          <p className=" text-[#03050c] text-[16px] font-semibold mb-2 dark:text-[#ffffff]">
            {t("password")}{" "}
          </p>
          <Input type="password" value={password} onChange={handleChangePassword} />
        </div>
        <div className="mb-2">
          <p className=" text-[#03050c] text-[16px] font-semibold mb-2 dark:text-[#ffffff]">
            {t("confirm_password")}{" "}
          </p>
          <Input type="password" value={correctPassword} onChange={handleChangCorrectPassword} />
        </div>
        <button type="submit" className="py-2 my-2 px-4 bg-buttonblue rounded-md text-white hover:bg-buttonblue-light w-[100%] ">
          {t("sign_up")}{" "}
        </button>
        <div className="flex justify-center">
          <span className="text-[14px] font-thin dark:text-[#555969]">
            {t("already_have_account")}{" "}
            <a href="/login" className="text-buttonblue">
              {t("log_in")}{" "}
            </a>
          </span>
        </div>
        </form>
      </CardFrame>
    </div>
  );
};

export default SignUp;
