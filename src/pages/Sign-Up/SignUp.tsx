import { Input } from "../../components/ui/input";
import CardFrame from "../../components/CardFrame/CardFrame";
import { useTranslation } from "react-i18next";
const SignUp = () => {
  const { t } = useTranslation();

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <CardFrame className="w-[500px]">
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
          <Input placeholder="john Doe" />
        </div>
        <div className="mb-2">
          <p className=" text-[#03050c] text-[16px] font-semibold mb-2 dark:text-[#ffffff]">
            {t("email")}{" "}
          </p>
          <Input type="email" placeholder="john@example.com" />
        </div>
        <div className="mb-2">
          <p className=" text-[#03050c] text-[16px] font-semibold mb-2 dark:text-[#ffffff]">
            {t("password")}{" "}
          </p>
          <Input type="password" />
        </div>
        <div className="mb-2">
          <p className=" text-[#03050c] text-[16px] font-semibold mb-2 dark:text-[#ffffff]">
            {t("confirm_password")}{" "}
          </p>
          <Input type="password" />
        </div>
        <button className="py-2 my-2 px-4 bg-buttonblue rounded-md text-white hover:bg-buttonblue-light w-[100%] ">
          {t("sign_up")}{" "}
        </button>
        <div className="flex justify-center">
          <span className="text-[14px] font-thin dark:text-[#555969]">
            {t("already_have_account")}{" "}
            <a href="login" className="text-buttonblue">
              {t("log_in")}{" "}
            </a>
          </span>
        </div>
      </CardFrame>
    </div>
  );
};

export default SignUp;
