import { ReactNode } from "react";

export type TypePropsButton = {
  children: ReactNode;
  onClick?: (e?: any) => void;
	className?: string
	disable?: boolean
	type?: 'button' | 'submit'
};
