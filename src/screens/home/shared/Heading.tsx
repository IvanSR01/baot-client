"use client";
import {FC} from "react";
import styles from "../Home.module.scss";
import City from "./City";
import CustomLink from "@/shared/ui/custom-link/CustomLink";
import {useSize} from "@/hook/useSize";
import clsx from "clsx";

const Heading: FC<{ heading: string; link: string; style?: string; className?: string }> = (props) => {
    const {
        heading,
        link,
        style,
        className
    } = props;
    const width = useSize();
    return (
        <div className={clsx(style ? style : styles.heading, "mb-[30px]", className)}>
            <h2 className="text-[48px] leading-[57.6px] tracking-2% font-medium max-1260px:text-[36px] max-1260px:leading-[43.2px] max-475px:!text-[26px] max-475px:!leading-[31.2px]">{heading}</h2>
            {width <= 700 ? (
                <></>
            ) : (
                <CustomLink path="/catalog">
                    Все {link} в <City/>
                </CustomLink>
            )}
        </div>
    );
};

export default Heading;
