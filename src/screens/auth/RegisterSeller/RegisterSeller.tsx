/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { errorCatch } from "@/$api/api.helpers";
import Header from "@/compenents/header/Header";
import { useAppDispatch } from "@/hook/useActions";
import authService from "@/service/auth-service/auth.service";
import { TypeHasUser } from "@/shared/types/auth.type";
import Button from "@/shared/ui/button/Button";
import { MaterialIcon } from "@/shared/ui/icon";
import setPhone from "@/shared/utils/setPhone";
import { inputs } from "@/shared/var/inputs";
import { setUserRegisterion } from "@/store/slice/registretion-user.slice";
import { useMutation } from "@tanstack/react-query";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { FaCreditCard } from "react-icons/fa6";
import { IoIosArrowDown, IoIosDocument } from "react-icons/io";
import styles from "../Auth.module.scss";
import AuthSelect from "../select/Select";
import { PiLinkSimpleHorizontalFill } from "react-icons/pi";
import { patterns } from "@/shared/var/patterns";
import { useCheckPassword } from "@/hook/useCheckPassword";
const RegisterSeller: FC = () => {
  const options = ["Физлица и самозанятые", "ООО и ИП"];
  const [selected, setSelected] = useState("");
  const [agree, setAgree] = useState({
    isPersonal: false,
    isConf: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
  } = useForm();
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const { mutate: mutateHas } = useMutation({
    mutationFn: ({ phone, email }: TypeHasUser) =>
      authService.hasUser(phone, email),
    onError: (err: any) => {
      setError(err?.response?.data?.type as string, {
        message: errorCatch(err),
      });
    },
    onSuccess: async (data) => {
      dispatch(
        setUserRegisterion({
          ...getValues(),
          phone: setPhone(data.phone),
          paymentInfo: {
            status: selected,
            nameACompany: getValues("nameACompany"),
            itn: getValues("itn"),
            bic: getValues("bic"),
            cardNumber: getValues("cardNumber"),
            paymentAccount: getValues("paymentAccount"),
          },
          code: data.code,
        })
      );
      push("/auth/verify-phone/seller");
    },
  });
  const onSubmit = async (data: any) => {
    useCheckPassword(data.password, data.confirm, (e: string) =>
      setError("password", {
        message: e,
      })
    );
    mutateHas({ phone: data.phone, email: data.email });
  };
  const [viewPassword, setViewPassword] = useState({
    password: false,
    confirm: false,
  });
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.heading}>
            <IoIosArrowDown onClick={() => push("/")} />
            <p>Регистрация владельца</p>
          </div>
          <div className={styles.items}>
            {inputs.map((item, i) => (
              <div
                className={clsx(
                  styles.item,
                  errors[item.name] ? styles.error : styles.colorsInput
                )}
                key={i}
              >
                <input
                  {...register(item.name, {
                    required: "Заполните поле",
                    maxLength: 20,
                    pattern: patterns[item.name]
                      ? patterns[item.name]
                      : {
                          value: /.*/, // Регулярное выражение для любой строки
                          message: "", // Пустая строка, поскольку это не регулярное выражение
                        },
                  })}
                  className={clsx(
                    styles.input,
                    errors[item.name] ? styles.error : styles.border
                  )}
                  type={item.name === "phone" ? "tel" : "text"}
                  id={item.name}
                  placeholder={item.placeholder}
                />
                <label htmlFor={item.name}>{item.placeholder}</label>
                {errors[item.name] && (
                  <p>{errors[item.name]?.message?.toString()}</p>
                )}
                <MaterialIcon name={item.svg} />
              </div>
            ))}
          </div>
          <div className={styles.items}>
            <div
              className={clsx(
                styles.item,
                errors["password"] ? styles.error : styles.colorsInput
              )}
            >
              <input
                {...register("password", {
                  required: "Заполните поле",
                  maxLength: 20,
                })}
                className={clsx(
                  styles.input,
                  errors["password"] ? styles.error : styles.border
                )}
                id={"password"}
                type={!viewPassword.password ? "password" : "text"}
                placeholder={"Пароль"}
              />
              <label htmlFor={"password"}>{"Пароль"}</label>
              {errors["password"] && (
                <p>{errors["password"]?.message?.toString()}</p>
              )}
              <span
                onClick={() =>
                  setViewPassword({
                    ...viewPassword,
                    password: !viewPassword.password,
                  })
                }
              >
                <MaterialIcon name={"FaEye"} />
              </span>
            </div>
            <div
              className={clsx(
                styles.item,
                errors["password"] ? styles.error : styles.colorsInput
              )}
            >
              <input
                {...register("confirm", {
                  required: "Заполните поле",
                  maxLength: 20,
                })}
                className={clsx(
                  styles.input,
                  errors["confirm"] ? styles.error : styles.border
                )}
                id={"confirm"}
                type={!viewPassword.confirm ? "password" : "text"}
                placeholder={"Повтор пароля"}
              />
              <label htmlFor={"confirm"}>{"Повтор пароля"}</label>
              {errors["confirm"] && (
                <p>{errors["confirm"]?.message?.toString()}</p>
              )}
              <span
                onClick={() =>
                  setViewPassword({
                    ...viewPassword,
                    confirm: !viewPassword.confirm,
                  })
                }
              >
                <MaterialIcon name={"FaEye"} />
              </span>
            </div>
            <div
              className={clsx(
                styles.item,
                errors["personalUrl"] ? styles.error : styles.colorsInput
              )}
            >
              <input
                {...register("personalUrl", {
                  required: "Заполните поле",
                  maxLength: 20,
                })}
                className={clsx(
                  styles.input,
                  errors["personalUrl"] ? styles.error : styles.border
                )}
                id={"personalUrl"}
                placeholder={"URL личной страницы"}
              />
              <label htmlFor={"personalUrl"}>{"URL личной страницы"}</label>
              {errors["personalUrl"] && (
                <p>{errors["personalUrl"]?.message?.toString()}</p>
              )}
              <PiLinkSimpleHorizontalFill />
            </div>
          </div>

          <div>
            <AuthSelect
              selected={selected}
              setAction={(i) => setSelected(options[i as number])}
              options={options}
              placeholder="Юр статус"
              className={styles.select}
            />
          </div>
          {selected && (
            <>
              {selected === "Физлица и самозанятые" ? (
                <div className={styles.items}>
                  <span>
                    Если хотите получать оплату от покупателей, заполните:
                  </span>
                  <div
                    className={clsx(
                      styles.item,
                      errors["itn"] ? styles.error : "",
                      styles.colorsInput
                    )}
                  >
                    <input
                      {...register("itn", { maxLength: 39 })}
                      className={clsx(
                        styles.input,
                        errors["itn"] ? styles.error : styles.border
                      )}
                      id={"itn"}
                      placeholder={"ИНН"}
                    />
                    <label htmlFor={"itn"}>ИНН</label>
                    {errors["itn"] && <p>Заполните поле</p>}
                    <MaterialIcon name={"FaUserAlt"} />
                  </div>
                  <div
                    className={clsx(
                      styles.item,
                      errors["cardNumber"] ? styles.error : "",
                      styles.colorsInput
                    )}
                  >
                    <input
                      {...register("cardNumber", { maxLength: 39 })}
                      className={clsx(
                        styles.input,
                        errors["cardNumber"] ? styles.error : styles.border
                      )}
                      id={"cardNumber"}
                      placeholder={"Номер банковской карты"}
                    />
                    <label htmlFor={"cardNumber"}>Номер банковской карты</label>
                    {errors["cardNumber"] && <p>Заполните поле</p>}
                    <FaCreditCard />
                  </div>
                </div>
              ) : (
                <div className={styles.items}>
                  <div
                    className={clsx(
                      styles.item,
                      errors["itn"] ? styles.error : "",
                      styles.colorsInput
                    )}
                  >
                    <input
                      {...register("nameACompany", {
                        required: true,
                        maxLength: 39,
                      })}
                      className={clsx(
                        styles.input,
                        errors["nameACompany"] ? styles.error : styles.border
                      )}
                      id={"nameACompany"}
                      placeholder={"Наименование организации"}
                    />
                    <label htmlFor={"nameACompany"}>
                      Наименование организации
                    </label>
                    {errors["nameACompany"] && <p>Заполните поле</p>}
                    <IoIosDocument />
                  </div>
                  <span>
                    Если хотите получать оплату от покупателей, заполните:
                  </span>
                  <div
                    className={clsx(
                      styles.item,
                      errors["itn"] ? styles.error : "",
                      styles.colorsInput
                    )}
                  >
                    <input
                      {...register("itn", { required: false, maxLength: 39 })}
                      className={clsx(
                        styles.input,
                        errors["itn"] ? styles.error : styles.border
                      )}
                      id={"itn"}
                      placeholder={"ИНН"}
                    />
                    <label htmlFor={"itn"}>ИНН</label>
                    {errors["itn"] && <p>Заполните поле</p>}
                    <MaterialIcon name={"FaUserAlt"} />
                  </div>
                  <div
                    className={clsx(
                      styles.item,
                      errors["paymentAccount"] ? styles.error : "",
                      styles.colorsInput
                    )}
                  >
                    <input
                      {...register("paymentAccount", {
                        required: false,
                        maxLength: 39,
                      })}
                      className={clsx(
                        styles.input,
                        errors["paymentAccount"] ? styles.error : styles.border
                      )}
                      id={"paymentAccount"}
                      placeholder={"Расчетный счет"}
                    />
                    <label htmlFor={"paymentAccount"}>Расчетный счет</label>
                    {errors["paymentAccount"] && <p>Заполните поле</p>}
                    <FaCreditCard />
                  </div>
                  <div
                    className={clsx(
                      styles.item,
                      errors["bic"] ? styles.error : "",
                      styles.colorsInput
                    )}
                  >
                    <input
                      {...register("bic", { required: false, maxLength: 39 })}
                      className={clsx(
                        styles.input,
                        errors["bic"] ? styles.error : styles.border
                      )}
                      id={"bic"}
                      placeholder={"БИК Банка"}
                    />
                    <label htmlFor={"bic"}>БИК Банка</label>
                    {errors["bic"] && <p>Заполните поле</p>}
                    <FaCreditCard />
                  </div>
                </div>
              )}
            </>
          )}
          <div className={styles.agree}>
            <div
              className="inline-flex items-center"
              style={{
                gap: "20px",
              }}
            >
              <label
                className="relative flex items-center rounded-full cursor-pointer"
                htmlFor="ripple-on"
                data-ripple-dark="true"
              >
                <input
                  checked={agree.isPersonal}
                  onChange={() =>
                    setAgree({ ...agree, isPersonal: !agree.isPersonal })
                  }
                  id="ripple-on"
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500"
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px cursor-pointer select-none"
                htmlFor="ripple-on"
              >
                Даю согласие на обработку персональных данных
              </label>
            </div>
          </div>
          <div className={styles.agree}>
            <div
              className="inline-flex items-center"
              style={{
                gap: "20px",
              }}
            >
              <label
                className="relative flex items-center rounded-full cursor-pointer"
                htmlFor="rippl2e-on"
                data-ripple-dark="true"
              >
                <input
                  checked={agree.isConf}
                  onChange={() => setAgree({ ...agree, isConf: !agree.isConf })}
                  id="rippl2e-on"
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500"
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px cursor-pointer select-none"
                htmlFor="rippl2e-on"
              >
                Принимаю пользовательское соглашение и политику
                конфиденциальности
              </label>
            </div>
          </div>
          <Button type="submit" className={styles.button}>
            Продолжить
          </Button>
        </form>
      </div>
    </>
  );
};

export default RegisterSeller;
