"use client";
import {FC, useEffect, useRef, useState} from "react";
import {TypePropsSelect} from "./Select.type";
import styles from "./Select.module.scss";
import Image from "next/image";
import clsx from "clsx";
import {arrowActive, calendarActive} from "@/assets/icons";
import img from "@/assets/img/calendar@1x.svg";


const Select: FC<TypePropsSelect> = (props) => {
    const {
        options,
        selected,
        setAction,
        placeholder,
        img,
        compact = false,
        className = "",
        imgActive = arrowActive.src
    } = props;
    const [isOpen, setIsOpen] = useState(false);
    const onClickSetActions = (i: number) => {
        setAction(i);
        setIsOpen(false);
    };
    const ref = useRef(null);
    useEffect(() => {
        const handleClick = (event: any) => {
            const path = event.path || (event.composedPath && event.composedPath());
            if (!path.includes(ref.current)) {
                setIsOpen(false);
            }
        };
        document.body.addEventListener("click", handleClick);

        return () => {
            document.body.addEventListener("click", handleClick);
        };
    }, []);
    return (
        <div className={clsx(styles.wrapper, compact ? styles.compact : "", className)} ref={ref}>
            {selected ? (
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className={clsx(styles.heading, isOpen && styles["focus__heading"], "!px-[12px] max-1200px:py-[8px]")}
                >
                    <div>
                        {
                            compact ? <></> : <span
                                className="text-[16px] leading-[23px] tracking-2% !font-normal max-1200px:!text-[12px] max-1200px:!leading-[12px]">{placeholder}</span>
                        }
                        <p className={clsx(styles.selected, `capitalize text-[18px] ${compact ? "font-bold" : "!font-medium"} leading-[21.6px] !tracking-1% mt-[4px]  max-1200px:!text-[14px] max-1200px:!leading-[16.8px]`)}>{selected}</p>
                    </div>
                    {
                        img ? (isOpen ?
                                <Image width={20} height={20} className={compact ? "" : "max-1200px:!w-[16px] max-1200px:!h-[16px]"}
                                       src={imgActive} alt=""/> :
                                <Image width={20} height={20} className={compact ? "" : "max-1200px:!w-[16px] max-1200px:!h-[16px]"}
                                       src={img} alt=""/>)
                            : <></>
                    }
                </div>
            ) : (
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className={clsx(styles.heading, isOpen && styles["focus__heading"], "!px-[12px]")}
                >
                    <p className={`text-[16px] ${selected ? "!text-[#18292D]" : "!text-[#728487]"}  leading-[23px] ${compact ? "font-bold tracking-3%" : "!font-medium tracking-2%"} max-1200px:!text-[14px] max-1200px:!leading-[16.8px]`}>{placeholder}</p>
                    {
                        img ? (isOpen ?
                                <Image width={20} height={20}
                                       className={compact ? "" : "max-1200px:!w-[16px] max-1200px:!h-[16px]"}
                                       src={imgActive} alt=""/> :
                                <Image width={20} height={20}
                                       className={compact ? "" : "max-1200px:!w-[16px] max-1200px:!h-[16px]"}
                                       src={img} alt=""/>)
                            : <></>
                    }
                </div>
            )}
            {isOpen ? (
                <ul className={clsx(styles.ul, "!min-w-fit")}>
                    {options.map((item, i) => (
                        <li
                            className={clsx(styles.li, `tracking-1% leading-[21px] !text-[#18292D] ${compact ? "!min-w-[100%] !w-full !max-w-[100%] !px-[16px] !whitespace-nowrap tracking-1%" : ""}`)}
                            onClick={() => onClickSetActions(i)}
                            key={i}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Select;
