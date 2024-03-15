import {PropsWithChildren} from "react";

export interface ICheckboxProps extends PropsWithChildren {
    onChange?(newValue: boolean): void
}