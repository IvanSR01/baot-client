"use client";
import { FC } from "react";
import styles from "../Home.module.scss";
import City from "./City";
import CustomLink from "@/shared/ui/custom-link/CustomLink";
import { useSize } from "@/hook/useSize";
const Heading: FC<{ heading: string; link: string; style?: string }> = ({
  heading,
  link,
  style,
}) => {
  const width = useSize();
  return (
    <div className={style ? style : styles.heading}>
      <h1>{heading}</h1>
      {width <= 700 ? (
        <></>
      ) : (
        <CustomLink path="/">
          Все {link} в <City />
        </CustomLink>
      )}
    </div>
  );
};

export default Heading;
