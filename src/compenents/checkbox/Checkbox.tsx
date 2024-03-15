"use client"
import {FC, useState} from "react";
import {ICheckboxProps} from "@/compenents/checkbox/Checkbox.types.ts";
import c from "./style.module.scss";
import clsx from "clsx";

export const Checkbox: FC<ICheckboxProps> = ({children, onChange = () => {}}) => {
    const [active, setActive] = useState<boolean>(false);

    const clickEvent = () => {
        onChange(!active);
        setActive(!active)
    }
    return (
        <button onClick={() => setActive(!active)} className="flex gap-[.5rem] items-center">
            <div className={clsx(c.button, active ? c.active : "")}></div>
            <span className={clsx(active ? (c.label + " " + c.active) : c.label)}>{children}</span>
        </button>
    );
}