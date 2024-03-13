'use client'
import React, { FC, useEffect, useState } from 'react'
import styles from './Phone.module.scss'
import { IoIosArrowDown } from 'react-icons/io'
import { useAppSelector } from '@/hook/useActions'
import clsx from 'clsx'
import { FaEye } from 'react-icons/fa'
import Button from '@/shared/ui/button/Button'
import { TypePropsPhone } from './Phone.type'
import Link from 'next/link'
const Phone: FC<TypePropsPhone> = ({ isLogin, onClick, onSubmit }) => {
	const { data } = useAppSelector(state => state.registerUser)
	const [pincode, setPincode] = useState('')
	const [error, setError] = useState('')
	const submitHandle = () => {
		if (data.code !== pincode) return setError('Неверный код')
		onSubmit()
	}
	return (
		<div className={clsx(styles.wrapper)}>
			<div className={styles.heading}>
				<IoIosArrowDown onClick={onClick} />
				<div>
					<p>Подтвердите номер</p>
				</div>
				<div></div>
			</div>
			<span>
				Введите последние 4 цифры входящего номера.
				{/* <br /> Например +7 XXX XХХ
				34 56. <br /> Отвечать на звонок не нужно */}
			</span>
			<div className={styles.pin}>
				<div className={clsx(styles.item, error ? styles.error : '')}>
					<input
						className={clsx(styles.input, error ? styles.error : styles.border)}
						id={'bic'}
						placeholder={'Код'}
						value={pincode}
						onChange={e => setPincode(e.target.value)}
						maxLength={20}
					/>
					<label
						htmlFor={'bic'}
						className={clsx(error ? styles.labelError : styles.defaultLabel)}
					>
						Код
					</label>
					{error && <p>{error}</p>}
					<FaEye />
				</div>
				<Button onClick={() => submitHandle()} className={styles.button}>
					Далее
				</Button>
			</div>
			{isLogin && (
				<div className={styles.bottom}>
					<p>У вас нет аккаунта?</p>
					<Link href={'/'}>Зарегестрироваться</Link>
				</div>
			)}
		</div>
	)
}

export default Phone
