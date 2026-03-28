'use client'

import { useGetAllVerificationRequestsQuery } from '@/redux/features/verification/verificationApi'
import s from './kyc.module.scss'
import { Space, Table, Tag } from 'antd'
import { useState } from 'react'
import { Verification } from '@/redux/features/verification/verification.type'
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import RejectVerificationModal
	from '@/components/modals/verificationModals/RejectVerificationModal/RejectVerificationModal'
import ApproveVerificationModal
	from '@/components/modals/verificationModals/ApproveVerificationModal/ApproveVerificationModal'

const KycPage = () => {
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [rejectModalOpen, setRejectModalOpen] = useState<boolean>(false)
	const [approveModalOpen, setApproveModalOpen] = useState<boolean>(false)
	const [selectedVerificationId, setSelectedVerificationId] = useState<number>(0)

	const { data } = useGetAllVerificationRequestsQuery({ page: currentPage })

	const onClickRejectAction = (verificationId: number) => {
		setSelectedVerificationId(verificationId)
		setRejectModalOpen(true)
	}

	const onClickApproveAction = (verificationId: number) => {
		setSelectedVerificationId(verificationId)
		setApproveModalOpen(true)
	}

	const dataSource = data?.data?.map((item: Verification) => ({
		key: item.id,
		user: item.user.name + ' ' + item.user.surname,
		email: item.user.email,
		status: item.status,
		createdAt: new Date(item.createdAt).toLocaleDateString()
	})) || []

	const columns = [
		{
			title: 'Пользователь',
			dataIndex: 'user',
			key: 'user'
		},
		{
			title: 'Эл. почта',
			dataIndex: 'email',
			key: 'email'
		},
		{
			title: 'Статус',
			dataIndex: 'status',
			key: 'status',
			render: (status: Verification['status']) => {
				let color = '#29A36E'
				let text = 'Подвержен'
				if (status === 'PENDING') {
					color = '#f49e0a'
					text = 'В обработке'
				}
				if (status === 'REJECTED') {
					color = '#ff4d4f'
					text = 'Отклонен'
				}
				return <Tag color={color}>{text.toUpperCase()}</Tag>
			}
		},
		{
			title: 'Дата',
			dataIndex: 'createdAt',
			key: 'createdAt'
		},
		{
			title: 'Action',
			key: 'action',
			render: (_: any, record: any) => (
				<Space size='middle'>
					<div className={`${s.table_action} ${s.action_approve}`} onClick={() => onClickApproveAction(record.key)}>
						<CheckCircleOutlined style={{ color: '#29A36E', fontSize: '18px' }} />
					</div>
					<div className={`${s.table_action} ${s.action_reject}`} onClick={() => onClickRejectAction(record.key)}>
						<CloseCircleOutlined style={{ color: '#ff4d4f', fontSize: '18px' }} />
					</div>
				</Space>
			)
		}
	]

	return (
		<>
			<div>
				<div className='content-container'>
					<div className='page_title_dashboard'>Очередь KYC</div>
					<div className={`content_box ${s.content_box}`}>
						<Table columns={columns} dataSource={dataSource} />
					</div>
				</div>
			</div>
			<RejectVerificationModal
				isModalOpen={rejectModalOpen}
				setIsModalOpen={setRejectModalOpen}
				selectedVerificationId={selectedVerificationId}
			/>
			<ApproveVerificationModal
				isModalOpen={approveModalOpen}
				setIsModalOpen={setApproveModalOpen}
				selectedVerificationId={selectedVerificationId}
			/>
		</>
	)
}

export default KycPage
