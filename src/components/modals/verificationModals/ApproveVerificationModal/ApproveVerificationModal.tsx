import React, { Dispatch, SetStateAction } from 'react'
import { Modal } from 'antd'
import s from '@/components/modals/verificationModals/VerificationModal.module.scss'
import { useApproveVerificationRequestMutation } from '@/redux/features/verification/verificationApi'
import toast from 'react-hot-toast'


type IProps = {
	isModalOpen: boolean
	setIsModalOpen: Dispatch<SetStateAction<boolean>>
	selectedVerificationId: number
}

const ApproveVerificationModal = ({ isModalOpen, setIsModalOpen, selectedVerificationId }: IProps) => {
	const [approveVerification] = useApproveVerificationRequestMutation()


	const handleOk = async () => {
		await toast.promise(approveVerification(String(selectedVerificationId)).unwrap(), {
			loading: 'Подтверждение заявки...',
			success: 'Заявка успешно подтверждена!',
			error: 'Ошибка при подтверждении заявки'
		})
		setIsModalOpen(false)
	}

	const handleCancel = () => {
		setIsModalOpen(false)
	}

	return (
		<Modal
			title='Подтверждение заявки'
			closable={{ 'aria-label': 'Custom Close Button' }}
			open={isModalOpen}
			onOk={handleOk}
			onCancel={handleCancel}
			okText='Подтвердить'
			cancelText='Отмена'
			className={s.modal}
		>
			<p>
				Вы действительно хотите <span style={{ color: '#29A36E' }}>{'подтвердить'.toUpperCase()}</span> заявку
				верификации пользователя?
			</p>
		</Modal>
	)
}

export default ApproveVerificationModal