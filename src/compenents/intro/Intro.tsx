import { FC } from 'react'
import styles from './Intro.module.scss'
import { TypePropsIntro } from './Intro.type'

const Intro: FC<TypePropsIntro> = ({ children }) => {
	return <section className={styles.container}>{children}</section>
}

export default Intro
