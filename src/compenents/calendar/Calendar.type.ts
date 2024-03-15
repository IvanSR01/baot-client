import { Dispatch, SetStateAction } from "react";

export type TypePropsCalendar = {
  setDate: Dispatch<SetStateAction<any>>;
	date: any[]
	setShow?: Dispatch<SetStateAction<boolean>>
	ref?: any,
	className?: string;
};



