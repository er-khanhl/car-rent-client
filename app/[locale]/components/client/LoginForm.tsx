"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { LoadingIcon } from "@/app/icons/icon";

interface FormData {
  email: string;
  password: string;
}

function LoginForm() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  const schema = yup
    .object({
      email: yup.string().required(t("email_required")),
      password: yup.string().required(t("password_required")),
    })
    .required();

  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormData>({
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const handleShow = () => {
    setShow(!show);
  };

  const onSubmit = async (data: FormData) => {
    console.log(data);

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col flex-wrap gap-6 p-4">
        <div className="space-y-2">
          <label className="text-lg font-medium">
            <span className="mb-1 inline-block">{t("email_field")}</span>
            <input
              placeholder={t("email_field_placeholder")}
              {...register("email")}
              className="max-w-[unset] border border-borderColor"
            />
          </label>

          <p className="text-red-600">{errors.email?.message}</p>
        </div>

        <div className="space-y-2">
          <label className="text-lg font-medium">
            <span className="mb-1 inline-block">{t("password_field")}</span>
            <div className="relative">
              <input
                placeholder={t("password_field_placeholder")}
                type={show ? "text" : "password"}
                {...register("password")}
                className="max-w-[unset] border border-borderColor pr-8 md:pr-12"
              />
              <span
                onClick={handleShow}
                className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 w-5 h-5"
              >
                {show ? <EyeSlashIcon /> : <EyeIcon />}
              </span>
            </div>
          </label>
          <p className="text-red-600">{errors.password?.message}</p>
        </div>

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="btn btn-blue"
            disabled={isSubmitting}
          >
            {isSubmitting && <LoadingIcon />}
            {t("login_title")}
          </button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
