"use client";
import { errorCatch } from "@/$api/api.helpers";
import Phone from "@/compenents/auth/phone/Phone";
import Header from "@/compenents/header/Header";
import { useAppDispatch, useAppSelector } from "@/hook/useActions";
import authService from "@/service/auth-service/auth.service";
import { setUser } from "@/store/slice/user.slice";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import styles from "../VerifyPhone.module.scss";
const VerifyPhoneSeller = () => {
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const { data } = useAppSelector((state) => state.registerUser);
  const { mutate: mutateSingUp } = useMutation({
    mutationFn: () => authService.sellerRegistration(data),
    onError: (err: any) => {
      console.log(errorCatch(err));
    },
    onSuccess: (data) => {
      dispatch(setUser(data));
			push('/')

    },
  });
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Phone
          isLogin={false}
          type={"registerSeller"}
          onClick={() => push(`/auth/register/seller`)}
          onSubmit={() => mutateSingUp()}
        />
      </div>
    </>
  );
};

export default VerifyPhoneSeller;
