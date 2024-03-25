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
import { yachtLogo } from "@/assets/icons";
import { usePathname } from "next/navigation";
import SearchFilter from "@/compenents/search-filter/SearchFilter.tsx";
import Media from "react-media";
import { ModalFilter } from "@/compenents/header/components/modal_filter";
import { HeaderProvider } from "@/compenents/header/HeaderProvider.tsx";
import clsx from "clsx";

const Header: FC = () => {
  const isAuth = useAuth();
  const dispatch = useAppDispatch();
  const path = usePathname();

  return (
    <HeaderProvider>
      <header className={clsx(styles.header, "min-1200px:!py-[26px]")}>
        <Wrapper>
          <div className={styles.container}>
            <Link href="/">
              <img className={styles.logo} src={yachtLogo.src} alt="" />
            </Link>
            {path && path.includes("/catalog") ? (
              <>
                <Media query="(max-width: 1259px)">
                  <div  >
                    <ModalFilter className={styles.headerCompactFilter}></ModalFilter>
                  </div>
                </Media>
                <Media query="(min-width: 1260px)">
                    <SearchFilter variant="catalogFilter" compact></SearchFilter>
                </Media>

              </>
            ) : null}

            <div className={clsx(styles.links, "max-680px:!gap-[16px]")}>
              <Image
                src={favorite}
                className="max-680px:!w-[20px] max-680px:!h-[20px]"
                alt=""
                width={24}
                height={24}
              />
              {isAuth ? (
                <Image
                  className="max-680px:!w-[20px] max-680px:!h-[20px]"
                  src={profile}
                  alt=""
                  width={24}
                  height={24}
                  onClick={() => toast.info("Вы автрозиравонны")}
                />
              ) : (
                <Image
                  className="max-680px:!w-[20px] max-680px:!h-[20px]"
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
    </HeaderProvider>
  );
};

export default Header;
