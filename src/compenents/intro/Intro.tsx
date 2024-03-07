import { FC } from 'react'
import Wrapper from '../wrapper/Wrapper'
import SearchFilter from '../search-filter/SearchFilter'
import styles from './Intro.module.scss'

const Intro: FC = () => {
	return (
		<section className={styles.container}>
			<Wrapper>
				<h2>Откройте новые горизонты праздника с нашими яхтами и лодками</h2>
				<SearchFilter />
			</Wrapper>
		</section>
	)
}

export default Intro
