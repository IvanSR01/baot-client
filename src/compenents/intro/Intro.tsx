import { FC } from 'react'
import styles from './Intro.module.scss'
import { TypePropsIntro } from './Intro.type'
import clsx from "clsx";

const Intro: FC<TypePropsIntro> = ({ children, className = "" }) => {
	return <section className={clsx(styles.container, className)}>{children}</section>
}

export default Intro
