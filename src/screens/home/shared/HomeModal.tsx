'use client'
import AuthModal from '@/compenents/auth/auth-modal/AuthModal'
import ChangeModal from '@/compenents/auth/change-modal/ChangeModal'
import PasswordModal from '@/compenents/auth/password-modal/PasswordModal'
import Phone from '@/compenents/auth/phone/Phone'
import ResetModal from '@/compenents/auth/reset-modal/ResetModal'
import Modal from '@/compenents/modal/Modal'
import { useAppDispatch, useAppSelector } from '@/hook/useActions'
import { setIsOpen } from '@/store/slice/modal.slice'
import { useState } from 'react'
const HomeModal = () => {
	const [isOpenPhoneCheck, setIsOpenCheck] = useState<boolean>(false)
	const [isOpenPassword, setIsOpenPassword] = useState<boolean>(false)
	const [isOpenReset, setIsOpenReset] = useState<boolean>(false)
	const [isOpenChange, setIsOpenChange] = useState<boolean>(false)
	const isOpen = useAppSelector(state => state.modal.isOpen)
	const dispatch = useAppDispatch()
	const [role, setRole] = useState('')
	return (
		<>
			<Modal
				showModal={isOpenPhoneCheck}
				setShowModal={val => setIsOpenCheck(val ? val : false)}
				content={
					<Phone
						isLogin={true}
						onClick={() => setIsOpenCheck(false)}
						onSubmit={() => setIsOpenChange(true)}
						type={role as 'registerSeller' | 'registerUser'}
					/>
				}
			/>
			<Modal
				showModal={isOpenChange}
				setShowModal={val => setIsOpenChange(val ? val : false)}
				content={
					<ChangeModal
						onClick={() => setIsOpenChange(false)}
						setPrevPage={() => {}}
					/>
				}
			/>
			<Modal
				showModal={isOpenPassword}
				setShowModal={val => setIsOpenPassword(val ? val : false)}
				content={
					<PasswordModal
						onClick={() => {
							setIsOpenPassword(false)
							dispatch(setIsOpen(true))
						}}
						onSubmit={() => setIsOpenPassword(false)}
						type={role as 'registerSeller' | 'registerUser'}
					/>
				}
			/>
			<Modal
				setShowModal={val => setIsOpenReset(val ? val : false)}
				showModal={isOpenReset}
				content={
					<ResetModal
						onClick={() => setIsOpenReset(false)}
						setNextPage={() => setIsOpenCheck(true)}
						setRole={val => setRole(val)}
					/>
				}
			/>
			<Modal
				showModal={isOpen}
				setShowModal={val => dispatch(setIsOpen(val ? val : false))}
				content={
					<AuthModal
						onClick={() => dispatch(setIsOpen(false))}
						setNextState={() => setIsOpenPassword(true)}
						setRole={val => setRole(val)}
						setResetPage={() => {
							dispatch(setIsOpen(false))
							setIsOpenReset(true)
						}}
					/>
				}
			/>
		</>
	)
}

export default HomeModal
