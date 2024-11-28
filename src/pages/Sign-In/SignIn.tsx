import { Input } from "../../components/ui/input";
import CardFrame from "../../components/CardFrame/CardFrame";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../supabase/auth";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { mutate: handleLogIn } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: () => {
      navigate("/");
    },
  });

  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    const isEmailFilled = !!data.email;
    const isPasswordFilled = !!data.password;
    if (isEmailFilled && isPasswordFilled) {
      handleLogIn({ email: data.email, password: data.password });
    }
    reset();
  };

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <CardFrame className="w-[500px]">
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <Controller
              name="email"
              control={control}
              rules={{
                required: "required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "invalid_email",
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <Input
                    placeholder="john@example.com"
                    value={value}
                    onChange={onChange}
                  />
                  {error && (
                    <p className="text-red-600">{t(error.message || "")}</p>
                  )}
                </>
              )}
            />
          </div>
          <div className="mb-2">
            <p className=" text-[#03050c] text-[16px] font-semibold mb-2 dark:text-[#ffffff]">
              {t("password")}
            </p>
            <Controller
              name="password"
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
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <Input type="password" value={value} onChange={onChange} />
                  {error && (
                    <p className="text-red-600">{t(error.message || "")}</p>
                  )}
                </>
              )}
            />
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
