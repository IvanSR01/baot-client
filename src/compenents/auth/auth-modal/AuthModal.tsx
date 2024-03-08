'use client'
import { FC, useState } from 'react'
import styles from './AuthModal.module.scss'
import { TypePropsAuthModal } from './AuthModal.type'
import { IoClose } from 'react-icons/io5'
import { FaEnvelope, FaEye } from 'react-icons/fa'
import clsx from 'clsx'
import Button from '@/shared/ui/button/Button'
import Link from 'next/link'
import authService from '@/service/auth-service/auth.service'
import { useDispatch } from 'react-redux'
import { setUserRegisterion } from '@/store/slice/registretion-user.slice'
import { errorCatch } from '@/$api/api.helpers'
import fromatPhone from '@/shared/utils/setPhone'
import { useMutation } from '@tanstack/react-query'
const AuthModal: FC<TypePropsAuthModal> = ({
	onClick,
	setNextState,
	setRole,
	setResetPage,
}) => {
	const [error, setError] = useState('')
	const [phoneOrEmail, setPhoneOrEmail] = useState('')
	const dispatch = useDispatch()
	const submitHandle = async () => {
		if (!phoneOrEmail) return setError('Введите номер телефона или почту')
		try {
			dispatch(
				setUserRegisterion({
					login: phoneOrEmail,
				})
			)
			setNextState()
			onClick()
		} catch (error) {
			setError(errorCatch(error))
		}
	}
	return (
		<div className={styles.wrapper}>
			<div className={styles.heading}>
				<div></div>
				<div>
					<p>Авторизация</p>
				</div>
				<IoClose onClick={onClick} />
			</div>
			<span>Введите свой номер телефона или почту</span>
			<div className={styles.pin}>
				<div
					className={clsx(
						styles.item,
						error ? styles.error : styles.colorsInput
					)}
				>
					<input
						className={clsx(styles.input, error ? styles.error : styles.border)}
						id={'phoneOrEmail'}
						placeholder={'Телефон или почта'}
						value={phoneOrEmail}
						onChange={e => setPhoneOrEmail(e.target.value)}
					/>
					<label
						htmlFor={'phoneOrEmail'}
						className={error && styles.errorLabel}
					>
						Телефон или почта
					</label>
					{error && <p>{error}</p>}
					<FaEnvelope />
				</div>
				<Button onClick={() => submitHandle()} className={styles.button}>
					Далее
				</Button>
			</div>
			<div className={styles.bottom}>
				<p>У вас нет аккаунта?</p>
				<Link href={'/auth/register/user'}>Зарегестрироваться</Link>
			</div>
			<div className={styles.bottom}>
				<div className={styles.change}>
					<p
						onClick={() => {
							setResetPage()
						}}
					>
						Восстановить данные аккаунта
					</p>
				</div>
			</div>
		</div>
	)
}

export default AuthModal
