'use client'
import { useSize } from '@/hook/useSize'
import CustomLink from '@/shared/ui/custom-link/CustomLink'
import { FC } from 'react'
import City from './City'

const Bottom: FC<{ link: string }> = ({ link }) => {
	const width = useSize()
	return (
		<>
			{width <= 700 ? (
				<div
					className="max-475px:text-left w-[100%] max-475px:!mt-[32px]"
				>
					<CustomLink path='catalog'>
						Все {link} в <City />
					</CustomLink>
				</div>
			) : (
				<></>
			)}
		</>
	)
}

export default Bottom
