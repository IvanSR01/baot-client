import { Dispatch, SetStateAction } from "react";

export type TypePropsSelect = {
  options: string[];
  compact?: boolean;
  className?: string;
  imgActive?: string;
  setAction: (i?: number) => void;
	selected?: string
	placeholder?: string
  variant?: "catalogFilter" | "homeFilter",
	img?: string
};
