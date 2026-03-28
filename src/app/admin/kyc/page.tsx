'use client'

import { useGetAllVerificationRequestsQuery } from '@/redux/features/verification/verificationApi'
import s from './kyc.module.scss'
import { Space, Table, Tag } from 'antd'
import { useState } from 'react'
import { Verification } from '@/redux/features/verification/verification.type'
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import toast from 'react-hot-toast'

const KycPage = () => {
	const [currentPage, setCurrentPage] = useState<number>(1)

	const { data } = useGetAllVerificationRequestsQuery({ page: currentPage })

	const handleAction = (verificationId: number, status: string) => {

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
				<Space size="middle">
					<div className={`${s.table_action} ${s.action_approve}`} onClick={() => handleAction(record.key, 'APPROVED')}>
						<CheckCircleOutlined />
					</div>
					<div className={`${s.table_action} ${s.action_reject}`} onClick={() => handleAction(record.key, 'REJECTED')}>
						<CloseCircleOutlined />
					</div>
				</Space>
			)
		}
	]

	return (
		<div>
			<div className="content-container">
				<div className="page_title_dashboard">Очередь KYC</div>
				<div className={`content_box ${s.content_box}`}>
					<Table columns={columns} dataSource={dataSource} />
				</div>
			</div>
		</div>
	)
}

export default KycPage
