import {FC, PropsWithChildren} from "react";
import {IButtonProps} from "@/compenents/button/Button.Types.ts";
import c from "./style.module.scss";
import clsx from "clsx";

export const Button: FC<IButtonProps> = (props) => {
    const {children, className, colorTheme = "primary", size= "large"} = props;
    return <button {...props} className={clsx(c.button, className, c[`${colorTheme}`], c[`${size}`])}>{children}</button>
}