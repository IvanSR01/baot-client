'use client'
import { errorCatch } from '@/$api/api.helpers'
import { useAppDispatch, useAppSelector } from '@/hook/useActions'
import authService from '@/service/auth-service/auth.service'
import Button from '@/shared/ui/button/Button'
import { setUser } from '@/store/slice/user.slice'
import { useMutation } from '@tanstack/react-query'
import clsx from 'clsx'
import Link from 'next/link'
import { FC, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { TypePropsPasswordModal } from './PasswordModa.type'
import styles from './PasswordModal.module.scss'
const PasswordModal: FC<TypePropsPasswordModal> = ({ onClick, onSubmit }) => {
	const { login } = useAppSelector(state => state.registerUser.data)
	const [password, setPassword] = useState('')
	const [isViewPass, setIsViewPass] = useState(false)
	const dispatch = useAppDispatch()
	const [error, setError] = useState('')
	const { mutate: mutateSingIn } = useMutation({
		mutationFn: () => authService.login({ phoneOrMail: login, password }),
		onError: (err: any) => {
			setError(errorCatch(err))
		},
		onSuccess: data => {
			dispatch(setUser(data))
			onSubmit()
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
						type={isViewPass ? 'text' : 'password'}
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<label htmlFor={'password'}>Пароль</label>
					{error && <p>{error}</p>}
					<FaEye onClick={() => setIsViewPass(!isViewPass)} />
				</div>
				<Button onClick={() => mutateSingIn()} className={styles.button}>
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

export default PasswordModal
