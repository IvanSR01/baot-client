"use client";
import { useSize } from "@/hook/useSize";
import CustomLink from "@/shared/ui/custom-link/CustomLink";
import { FC } from "react";
import City from "./City";

const Bottom: FC<{link: string}> = ({link}) => {
  const width = useSize();
  return (
    <>
      {width <= 700 ? (
        <CustomLink path="/">
          Все {link} в <City />
        </CustomLink>
      ) : (
        <></>
      )}
    </>
  );
};

export default Bottom;
