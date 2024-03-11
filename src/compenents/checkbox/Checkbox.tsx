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
        <div className="flex gap-[.5rem] items-center">
            <button onClick={() => setActive(!active)} className={clsx(c.button, active ? c.active : "")}></button>
            <span className={clsx(active ? (c.label + " " + c.active) : c.label)}>{children}</span>
        </div>
    );
}