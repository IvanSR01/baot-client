import { Dispatch, SetStateAction } from "react";

export type TypePropsSelect = {
  options: string[];
  compact?: boolean;
  className?: string;
  setAction: (i?: number) => void;
	selected?: string
	placeholder?: string
	img?: string
};
