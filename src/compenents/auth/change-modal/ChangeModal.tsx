'use client'
import { FC, useState } from 'react'
import styles from './ChangeModal.module.scss'
import { FaEye } from 'react-icons/fa'
import Link from 'next/link'
import clsx from 'clsx'
import { IoIosArrowDown } from 'react-icons/io'
import { TypePropsChangeModal } from './ChangeModal.type'
import { useMutation } from '@tanstack/react-query'
import Button from '@/shared/ui/button/Button'
import authService from '@/service/auth-service/auth.service'
import { useAppSelector } from '@/hook/useActions'
import { errorCatch } from '@/$api/api.helpers'
const ChangeModal: FC<TypePropsChangeModal> = ({ onClick, setPrevPage }) => {
	const [password, setPassword] = useState('')
	const [confirm, setConfirm] = useState('')
	const [error, setError] = useState('')
	const { phone } = useAppSelector(state => state.registerUser.data)
	const { mutate: mutateChange } = useMutation({
		mutationFn: () =>
			authService.changePassword({
				phoneOrMail: phone,
				password,
				confirm,
			}),
		onSuccess: () => {
			setPrevPage()
			onClick()
		},
		onError: (err: any) => {
			setError(errorCatch(err))
		},
	})
	return (
		<div className={styles.wrapper}>
			<div className={styles.heading}>
				<IoIosArrowDown onClick={onClick} />
				<div>
					<p>Введите пароль</p>
				</div>
				<div></div>
			</div>
			<span>Введите пароль</span>
			<div className={styles.pin}>
				<div
					className={clsx(
						styles.item,
						error ? styles.error : styles.colorsInput
					)}
				>
					<input
						className={clsx(styles.input, error ? styles.error : styles.border)}
						id={'password'}
						placeholder={'Пароль'}
						value={password}
						maxLength={39}
						onChange={e => setPassword(e.target.value)}
					/>
					<label htmlFor={'password'}>Пароль</label>
					{error && <p>{error}</p>}
					<FaEye />
				</div>
				<div className={clsx(styles.item)}>
					<input
						className={clsx(styles.input, error ? styles.error : styles.border)}
						id={'confirm'}
						placeholder={'Повторить пароль'}
						value={confirm}
						onChange={e => setConfirm(e.target.value)}
					/>
					<label htmlFor={'confirm'}>Повторить пароль</label>
					{error && <p>{error}</p>}
					<FaEye />
				</div>
				<Button onClick={() => mutateChange()} className={styles.button}>
					Далее
				</Button>
			</div>
			<div className={styles.bottom}>
				<p>У вас нет аккаунта?</p>
				<Link href={'/auth/register/user'}>Зарегестрироваться</Link>
			</div>
		</div>
	)
}

export default ChangeModal
