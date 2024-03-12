import { errorCatch } from '@/$api/api.helpers'
import authService from '@/service/auth-service/auth.service'
import Button from '@/shared/ui/button/Button'
import fromatPhone from '@/shared/utils/setPhone'
import { setUserRegisterion } from '@/store/slice/registretion-user.slice'
import clsx from 'clsx'
import Link from 'next/link'
import { FC, useState } from 'react'
import { FaEye, FaPhone } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import styles from './ResetModal.module.scss'
import { TypePropsResetModel } from './ResetModel.type'
import { useMutation } from '@tanstack/react-query'
const ResetModal: FC<TypePropsResetModel> = ({
	onClick,
	setRole,
	setNextPage,
}) => {
	const [error, setError] = useState('')
	const [phone, setPhone] = useState('')
	const dispatch = useDispatch()
	const { mutate: mutateGetCode } = useMutation({
		mutationFn: () => authService.getCode(phone),
		onError: (err: any) => {
			console.log(err)
			setError(errorCatch(err))
		},
		onSuccess: data => {
			dispatch(
				setUserRegisterion({
					phone: phone,
					code: data.code,
				})
			)
			setNextPage()
			onClick()
		},
	})

	return (
		<div className={styles.wrapper}>
			<div className={styles.heading}>
				<div></div>
				<div>
					<p>Подтвердите номер</p>
				</div>
				<IoClose onClick={onClick} />
			</div>
			<span>
				Введите телефон или емейл, нажмите восстановить. Мы пришлем на Ваш емейл
				ссылку/код для восстановления доступа.
			</span>
			<div className={styles.pin}>
				<div
					className={clsx(
						styles.item,
						error ? styles.error : styles.colorsInput
					)}
				>
					<input
						className={clsx(styles.input, error ? styles.error : styles.border)}
						id={'phone'}
						placeholder={'Телефон'}
						value={phone}
						onChange={e => setPhone(e.target.value)}
						maxLength={39}
					/>
					<label htmlFor={'phone'}>Телефон</label>
					{error && <p>{error}</p>}
					<FaPhone />
				</div>
				<span>
					Если этот способ не помог, напишите нам через форму обратной связи с
					данными, которые указали при регистрации.
				</span>
				<Button
					onClick={() => {
						if (!phone) return setError('Введите номер телефона')
						mutateGetCode()
					}}
					className={styles.button}
				>
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

export default ResetModal
