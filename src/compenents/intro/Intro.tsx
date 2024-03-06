import { FC } from 'react'
import { TypePropsIntro } from './Intro.type'
import styles from './Intro.module.scss'
const Intro: FC<TypePropsIntro> = ({ children }) => {
	return (
		<section className={styles.wrapper}>
			{children}
		</section>
	)
}

export default Intro
