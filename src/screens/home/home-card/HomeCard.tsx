'use client'
import React, {FC, useState} from 'react'
import styles from './HomeCard.module.scss'
import img from '@/assets/img/Rectangle 28.png'
import imgT from '@/assets/img/Rectangle 2821.png'
import imgD from '@/assets/img/Rectangle 2231.png'
import clsx from 'clsx'
import favIcon from '@/assets/img/heart.png'
import iconThree from '@/assets/star.svg'
import { TypePropsHomeCard } from './HomeCard.type'
import CarouselDefault from '@/shared/ui/carousel/Carousel'
import Badge from '@/compenents/badge/Badge'
import {favoriteActive} from "@/assets/icons";
const HomeCard: FC<TypePropsHomeCard> = ({ status }) => {
	const [isFavorite, setIsFavorite] = useState(false);

	return (
		<div className={styles.card}>
			<div className={clsx(styles.upper, '')}>
				<Badge type={status === 'promo' ? 'sale' : 'popular'} />
			</div>
			<div className={styles.img}>
				<CarouselDefault
					imgs={[img.src, imgT.src, imgD.src, img.src, imgT.src]}
				/>
			</div>
			<div className={styles.border}>
				<button type="button" onClick={() => setIsFavorite(!isFavorite)} className={styles.fav}>
					{
						isFavorite ? <img src={favoriteActive.src} alt='' /> : <img src={favIcon.src} alt='' />
					}
				</button>
				<div className={styles.row}>
					<div>
						<h3>Porshe Panamera</h3>
						<div className={styles.star}>
							<img src={iconThree.src} alt='' />
							<p>4.9 (50)</p>
						</div>
					</div>
					<div className={styles.price}>
						<div className={styles.sum}>
							<div>от</div>
							<b>1400</b>
						</div>
						<div>₽/час</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeCard
