import { FC } from "react";
import { TypePropsInput } from "./Input.type";
import styles from "./Input.module.scss";
const Input: FC<TypePropsInput> = ({ value, onClick }) => {
  return <input className={styles.input} value={value} onClick={onClick} />;
};

export default Input;
