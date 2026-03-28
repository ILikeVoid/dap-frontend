import React, { Dispatch, SetStateAction, useState } from 'react'
import s from '../VerificationModal.module.scss'
import { Modal } from 'antd'
import { useRejectVerificationRequestMutation } from '@/redux/features/verification/verificationApi'
import toast from 'react-hot-toast'
import TextArea from 'antd/es/input/TextArea'

type IProps = {
	isModalOpen: boolean
	setIsModalOpen: Dispatch<SetStateAction<boolean>>
	selectedVerificationId: number
}

const RejectVerificationModal = ({ isModalOpen, setIsModalOpen, selectedVerificationId }: IProps) => {
	const [rejectVerification] = useRejectVerificationRequestMutation()
	const [reason, setReason] = useState('')

	const handleOk = async () => {
		await toast.promise(rejectVerification({ id: String(selectedVerificationId), rejectionReason: reason }).unwrap(), {
			loading: 'Отклонение заявки...',
			success: 'Заявка успешно отклонена!',
			error: 'Ошибка при отклонении заявки'
		})
		setIsModalOpen(false)
		setReason('')
	}

	const handleCancel = () => {
		setReason('')
		setIsModalOpen(false)
	}

	return (
		<Modal
			title="Отклонение заявки "
			closable={{ 'aria-label': 'Custom Close Button' }}
			open={isModalOpen}
			onOk={handleOk}
			onCancel={handleCancel}
			okText="Отклонить"
			cancelText="Отмена"
			className={s.modal}
		>
			<p>
				Вы действительно хотите <span style={{ color: '#ff4d4f' }}>{'отклонить'.toUpperCase()}</span> заявку верификации
				пользователя
			</p>
			<div className={s.reason}>
				<span>Опишите причину отклонения:</span>
				<TextArea rows={4} value={reason} onChange={(e) => setReason(e.target.value)} />
			</div>
		</Modal>
	)
}

export default RejectVerificationModal