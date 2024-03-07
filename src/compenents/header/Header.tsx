"use client";
import favorite from "@/assets/img/heart.svg";
import logo from "@/assets/img/logo.svg";
import profile from "@/assets/img/profile-circle.svg";
import Image from "next/image";
import { FC } from "react";
import Wrapper from "../wrapper/Wrapper";
import styles from "./Header.module.scss";

import { useAppDispatch } from "@/hook/useActions";
import { setIsOpen } from "@/store/slice/modal.slice";
import Link from "next/link";
import { toast } from "react-toastify";
import { useAuth } from "./useAuth";
const Header: FC = () => {
  const isAuth = useAuth();
  const dispatch = useAppDispatch();
  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.container}>
          <Link href="/">
            <img className={styles.logo} src={logo.src} alt="" />
          </Link>
          <div className={styles.links}>
            <Image src={favorite} alt="" width={40} height={30} />
            {isAuth ? (
              <Image
                src={profile}
                alt=""
                width={40}
                height={30}
                onClick={() => toast.info("Вы автрозиравонны")}
              />
            ) : (
              <Image
                src={profile}
                alt=""
                width={40}
                height={30}
                onClick={() => dispatch(setIsOpen(true))}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
