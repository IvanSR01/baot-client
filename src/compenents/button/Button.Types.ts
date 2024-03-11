import {ButtonHTMLAttributes} from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: "large" | "medium" | "small";
    colorTheme?: "primary" | "secondary" | "transparent-primary" | "transparent-black";
}