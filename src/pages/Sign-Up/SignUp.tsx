import { Input } from "../../components/ui/input";
import CardFrame from "../../components/CardFrame/CardFrame";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../supabase/auth";
import { Controller, useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  password: string;
  correctPassword: string;
};

const SignUp = () => {
  const { t } = useTranslation();

  const { mutate: handleRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: register,
  });

  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      correctPassword: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    const passwordAreNotSame =
      data.password.trim() !== data.correctPassword.trim();
    if (passwordAreNotSame) {
      alert("passwords must match");
      return;
    }
    handleRegister({ email: data.email, password: data.password });
    reset();
  };

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <CardFrame className="w-[500px]">
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <Controller
              name="name"
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
                  <Input
                    placeholder="john Doe"
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
              {t("email")}{" "}
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
              {t("password")}{" "}
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
          <div className="mb-2">
            <p className=" text-[#03050c] text-[16px] font-semibold mb-2 dark:text-[#ffffff]">
              {t("confirm_password")}{" "}
            </p>
            <Controller
              name="correctPassword"
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
          <button
            type="submit"
            className="py-2 my-2 px-4 bg-buttonblue rounded-md text-white hover:bg-buttonblue-light w-[100%] "
          >
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
