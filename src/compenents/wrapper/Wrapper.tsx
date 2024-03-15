import React, { FC, PropsWithChildren } from "react";
import styles from "./Wrapper.module.scss";
import clsx from "clsx";

const Wrapper: FC<PropsWithChildren & {className?: string}> = ({ children, className = "" }) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      {children}
    </div>
  );
};

export default Wrapper;
