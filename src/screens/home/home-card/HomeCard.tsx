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
import {favorite, favoriteActive} from "@/assets/icons";
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
						isFavorite ? <img src={favoriteActive.src} alt='' /> : <img src={favorite.src} alt='' />
					}
				</button>
				<div className={styles.row}>
					<div>
						<h3 className="tracking-4%">Porshe Panamera</h3>
						<div className={styles.star}>
							<img src={iconThree.src} alt='' />
							<p className="font-semibold tracking-3%">4.9 (50)</p>
						</div>
					</div>
					<div className={styles.price}>
						<div className={styles.sum}>
							<div className="font-semibold tracking-3%">от</div>
							<b className="tracking-1%">1400</b>
						</div>
						<div className="tracking-3% font-semibold">₽/час</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeCard
