'use client'

import { ReactNode } from 'react'
import s from './layout.module.scss'
import { Sidebar } from '@/components/Sidebar/Sidebar'
import { VerifyIcon } from '@/assets/icons/nav/VerifyIcon'
import { UsersIcon } from '@/assets/icons/nav/UsersIcon'
import { DashboardIcon } from '@/assets/icons/nav/DashboardIcon'
import { DepositIcon } from '@/assets/icons/nav/DepositIcon'
import { WithdrawIcon } from '@/assets/icons/nav/WithdrawIcon'
import { TransactionIcon } from '@/assets/icons/nav/TransactionIcon'
import { DocsIcon } from '@/assets/icons/nav/DocsIcon'
import { ModeratorIcon } from '@/assets/icons/nav/ModeratorIcon'
import { MagazineIcon } from '@/assets/icons/nav/MagazineIcon'
import { SettingsIcon } from '@/assets/icons/nav/SettingsIcon'

const items = [
	{ key: '1', icon: <DashboardIcon />, label: 'Панель администратора', href: '/admin/admin-panel' },
	{ key: '2', icon: <UsersIcon />, label: 'Пользователи', href: '/admin/users' },
	{ key: '3', icon: <VerifyIcon />, label: 'Очередь KYC', href: '/admin/kyc' },
	{ key: '4', icon: <DepositIcon />, label: 'Заявки на пополнение', href: '/admin/deposit' },
	{ key: '5', icon: <WithdrawIcon />, label: 'Заявки на вывод', href: '/admin/withdraw' },
	{ key: '6', icon: <TransactionIcon />, label: 'Транзакции', href: '/admin/transaction' },
	{ key: '7', icon: <DocsIcon />, label: 'Документы', href: '/admin/docs' },
	{ key: '8', icon: <ModeratorIcon />, label: 'Реестр сотрудников', href: '/admin/moderators' },
	{ key: '9', icon: <MagazineIcon />, label: 'Журнал действий', href: '/admin/moderators' },
	{ key: '10', icon: <SettingsIcon />, label: 'Настройки', href: '/admin/settings' }
]

export default function AdminLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<div className={s.admin_layout}>
			<Sidebar items={items} title='Админ-панель' iconBgColor='#CD2828'/>
			<div>
				<header>
					<div className='content-container'>Админ-панель</div>
				</header>
				{children}
			</div>
		</div>
	)
}
