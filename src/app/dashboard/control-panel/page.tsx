'use client'

import React from 'react'
import s from './control-panel.module.scss'
import { ProgressArrowIcon } from '@/assets/icons/ProgressArrowIcon'
import { RegressArrowIcon } from '@/assets/icons/RegressArrowIcon'
import { PendingIcon } from '@/assets/icons/PendingIcon'
import { WalletIcon } from '@/assets/icons/nav/WalletIcon'
import { CustomButton } from '@/components/CustomButton/CustomButton'
import { DepositIcon } from '@/assets/icons/nav/DepositIcon'
import { WithdrawIcon } from '@/assets/icons/nav/WithdrawIcon'
import { VerifyIcon } from '@/assets/icons/nav/VerifyIcon'
import { useRouter } from 'next/navigation'

type TransactionTableDataType = {
	key: string
	date: string
	type: number
	sum: string
	status: 'completed' | 'paid' | 'pending' | 'rejected'
	comment: string
	txID: string
}

const ControlPanelPage = () => {
	const router = useRouter()

	return (
		<div className={s.panel}>
			<div className="content-container">
				<div className="page_title page_title_dashboard">Панель управления</div>
				<div className={s.wallet_info}>
					<div className={`content_box ${s.card}`}>
						<div className={s.card_head}>
							<div>Доступный баланс</div>
							<WalletIcon width={'24'} height={'24'} color="#2248C3" />
						</div>
						<div className={s.sum}>$3,100.00</div>
					</div>
					<div className={`content_box ${s.card}`}>
						<div className={s.card_head}>
							<div>Удержанный баланс</div>
							<PendingIcon />
						</div>
						<div className={s.sum}>$3,100.00</div>
					</div>
					<div className={`content_box ${s.card}`}>
						<div className={s.card_head}>
							<div>Всего начислено</div>
							<ProgressArrowIcon />
						</div>
						<div className={s.sum}>$3,100.00</div>
					</div>
					<div className={`content_box ${s.card}`}>
						<div className={s.card_head}>
							<div>Всего выплачено</div>
							<RegressArrowIcon />
						</div>
						<div className={s.sum}>$3,100.00</div>
					</div>
				</div>
				<div className={`content_box ${s.actions}`}>
					<div className={s.section_title}>Быстрые действия</div>
					<div className={s.options}>
						<CustomButton isGradient
													onClick={() => router.replace('/deposit')}><DepositIcon /> Пополнение</CustomButton>
						<CustomButton type="primary"
													onClick={() => router.replace('/withdraw')}><WithdrawIcon /> Вывод</CustomButton>
						<CustomButton type="primary"
													onClick={() => router.replace('/verify')}><VerifyIcon /> Верификация</CustomButton>
					</div>
				</div>
				<div className={s.transaction_table}>
					{/*<Table<TransactionTableDataType> columns={columns} dataSource={data} />*/}
				</div>
			</div>
		</div>
	)
}

export default ControlPanelPage