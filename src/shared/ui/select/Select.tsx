"use client";
import {FC, useEffect, useRef, useState} from "react";
import {TypePropsSelect} from "./Select.type";
import styles from "./Select.module.scss";
import Image from "next/image";
import clsx from "clsx";

const Select: FC<TypePropsSelect> = (props) => {
    const {
        options,
        selected,
        setAction,
        placeholder,
        img,
        compact = false,
        className = ""
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
                            compact ? <></> : <span className="text-[16px] leading-[23px] tracking-2% !font-normal max-1200px:!text-[12px] max-1200px:!leading-[12px]">{placeholder}</span>
                        }
                        <p className={clsx(styles.selected, "capitalize text-[18px] !font-semibold leading-[21.6px] !tracking-1% mt-[4px]  max-1200px:!text-[14px] max-1200px:!leading-[16.8px]")}>{selected}</p>
                    </div>
                    {img && <Image width={20} height={20} className={compact ? "" : "max-1200px:!w-[16px] max-1200px:!h-[16px]"} src={img} alt={""}/>}
                </div>
            ) : (
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className={clsx(styles.heading, isOpen && styles["focus__heading"], "!px-[12px]")}
                >
                    <p className="text-[16px] leading-[23px] tracking-2% !font-normal max-1200px:!text-[14px] max-1200px:!leading-[16.8px]">{placeholder}</p>
                    {img && <Image width={compact ? 16 : 20} height={compact ? 16 : 20} className={compact ? "" : "max-1200px:!w-[16px] max-1200px:!h-[16px]"} src={img} alt={""}/>}
                </div>
            )}
            {isOpen ? (
                <ul className={styles.ul}>
                    {options.map((item, i) => (
                        <li
                            className={clsx(styles.li, "capitalize")}
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
