import { Dispatch, ReactNode, SetStateAction } from "react";

export type TypePropsModal = {
  setShowModal: (value?: boolean) => void;
  showModal: boolean;
  content: ReactNode;
};
