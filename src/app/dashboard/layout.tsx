'use client'

import { ReactNode } from 'react'
import s from './layout.module.scss'
import { Sidebar } from '@/components/Sidebar/Sidebar'
import { DashboardHeader } from '@/components/DashboardHeader/DashboardHeader'
import { DashboardIcon } from '@/assets/icons/nav/DashboardIcon'
import { VerifyIcon } from '@/assets/icons/nav/VerifyIcon'
import { WalletIcon } from '@/assets/icons/nav/WalletIcon'
import { DepositIcon } from '@/assets/icons/nav/DepositIcon'
import { WithdrawIcon } from '@/assets/icons/nav/WithdrawIcon'
import { TransactionIcon } from '@/assets/icons/nav/TransactionIcon'
import { SettingsIcon } from '@/assets/icons/nav/SettingsIcon'
import { HelpIcon } from '@/assets/icons/nav/HelpIcon'

const items = [
	{ key: '1', icon: <DashboardIcon />, label: 'Панель управления', href: '/dashboard/control-panel' },
	{ key: '2', icon: <VerifyIcon />, label: 'Верификация', href: '/dashboard/verify' },
	{ key: '3', icon: <WalletIcon />, label: 'Кошелёк', href: '/dashboard/wallet' },
	{ key: '4', icon: <DepositIcon />, label: 'Пополнение', href: '/dashboard/deposit' },
	{ key: '5', icon: <WithdrawIcon />, label: 'Вывод', href: '/dashboard/withdraw' },
	{ key: '6', icon: <TransactionIcon />, label: 'Транзакции', href: '/dashboard/transaction' },
	{ key: '7', icon: <SettingsIcon />, label: 'Настройки', href: '/dashboard/settings' },
	{ key: '8', icon: <HelpIcon />, label: 'Поддержка', href: '/dashboard/help' }
]

export default function DashboardLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<div className={s.dashboard_layout}>
			<Sidebar items={items} title='Payroll Wallet' />
			<div>
				<DashboardHeader />
				{children}
			</div>
		</div>
	)
}
