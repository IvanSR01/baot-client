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
import { logotype, logotypeSmall } from "@/assets/icons";
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
      <header className={clsx(styles.header, "max-680px:!py-[12px]")}>
        <Wrapper>
          <div className={styles.container}>
            <Link href="/">
              <Media query="(min-width: 735px)">
                <img className={styles.logo} src={logotype.src} alt="" />
              </Media>
              <Media query="(max-width: 736px)">
                <img
                  className={styles.logo}
                  width={31.47}
                  height={17.44}
                  src={logotypeSmall.src}
                  alt=""
                />
              </Media>
            </Link>
            {path && path.includes("/catalog") ? (
              <>
                <Media query="(max-width: 1259px)">
                  <ModalFilter></ModalFilter>
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
