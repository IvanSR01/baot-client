import { FC } from "react";
import { TypePropsButton } from "./Button.type";
import styles from "./Button.module.scss";
import clsx from "clsx";
const Button: FC<TypePropsButton> = ({
  children,
  onClick,
  className,
  disable,
  type,
}) => {
  const handleClick = (e: any) => {
    if (disable) return;
    onClick && onClick(e);
  };
  return (
    <button
      disabled={disable}
      type={type ? type : "button"}
      onClick={handleClick}
      className={clsx(styles.button, className)}
    >
      {children}
    </button>
  );
};

export default Button;
