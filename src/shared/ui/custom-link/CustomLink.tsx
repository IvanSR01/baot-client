import Link from "next/link";
import { FC } from "react";
import { TypePropsLink } from "./CustomLink.type";
import styles from './Custom.module.scss'
const CustomLink: FC<TypePropsLink> = ({ path, children }) => {
  return <Link className={styles.link} href={path}>{children}</Link>;
};

export default CustomLink;
