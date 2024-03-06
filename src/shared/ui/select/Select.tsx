"use client";
import { FC, useEffect, useRef, useState } from "react";
import { TypePropsSelect } from "./Select.type";
import styles from "./Select.module.scss";
import Image from "next/image";
import clsx from "clsx";

const Select: FC<TypePropsSelect> = ({
  options,
  selected,
  setAction,
  placeholder,
  img,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickSetActions = (i: number) => {
    setAction(i);
    setIsOpen(false);
  };
  const ref = useRef(null);
  useEffect(() => {
    const handleClick = (event: any) => {
      const path = event.path || (event.composedPath && event.composedPath());
      if (!path.includes(ref.current)) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.addEventListener("click", handleClick);
    };
  }, []);
  return (
    <div className={styles.wrapper} ref={ref}>
      {selected ? (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(styles.heading, isOpen && styles["focus__heading"])}
        >
          <div>
            <span>{placeholder}</span> <p className={styles.selected}>{selected}</p>
          </div>
          {img && <Image width={20} height={20} src={img} alt={""} />}
        </div>
      ) : (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(styles.heading, isOpen && styles["focus__heading"])}
        >
          <p>{placeholder}</p>
          {img && <Image width={20} height={20} src={img} alt={""} />}
        </div>
      )}
      {isOpen ? (
        <ul className={styles.ul}>
          {options.map((item, i) => (
            <li
              className={styles.li}
              onClick={() => onClickSetActions(i)}
              key={i}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Select;
