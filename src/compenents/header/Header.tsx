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
import {logotype} from "@/assets/icons";
import {usePathname} from "next/navigation";
import SearchFilter from "@/compenents/search-filter/SearchFilter.tsx";
import Media from "react-media";
const Header: FC = () => {
  const isAuth = useAuth();
  const dispatch = useAppDispatch();
  const path = usePathname();

  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.container}>
          <Link href="/">
            <img className={styles.logo} src={logotype.src} alt="" />
          </Link>
          {
            path.includes("/catalog") ?
                <Media query="(min-width: 1260px)">
                  <SearchFilter compact/>
                </Media> : <></>
          }
          <div className={styles.links}>
            <Image src={favorite} alt="" width={24} height={24} />
            {isAuth ? (
              <Image
                src={profile}
                alt=""
                width={24}
                height={24}
                onClick={() => toast.info("Вы автрозиравонны")}
              />
            ) : (
              <Image
                src={profile}
                alt=""
                width={24}
                height={24}
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
