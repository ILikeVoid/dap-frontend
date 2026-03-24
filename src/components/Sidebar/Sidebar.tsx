import React from 'react'
import s from './Sidebar.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IconBlock } from '@/components/IconBlock/IconBlock'
import { LogoIcon } from '@/assets/icons/LogoIcon'
import { DashboardIcon } from '@/assets/icons/nav/DashboardIcon'
import { VerifyIcon } from '@/assets/icons/nav/VerifyIcon'
import { WalletIcon } from '@/assets/icons/nav/WalletIcon'
import { DepositIcon } from '@/assets/icons/nav/DepositIcon'
import { WithdrawIcon } from '@/assets/icons/nav/WithdrawIcon'
import { TransactionIcon } from '@/assets/icons/nav/TransactionIcon'
import { SettingsIcon } from '@/assets/icons/nav/SettingsIcon'
import { HelpIcon } from '@/assets/icons/nav/HelpIcon'
import { LogoutIcon } from '@/assets/icons/nav/LogoutIcon'

export const Sidebar = () => {
	const pathname = usePathname()

	const isActive = (path: string) => pathname === path

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

	return (
		<div className={s.sidebar}>
			<div className={s.logo}>
				<IconBlock width={40} height={40}>
					<LogoIcon />
				</IconBlock>
				Payroll Wallet
			</div>
			<nav>
				{items.map((item) => (
					<Link key={item.key} href={item.href} className={isActive(item.href) ? s.active : ''}>
						{item.icon}
						{item.label}
					</Link>
				))}
			</nav>
			<div className={s.logout}>
				<Link href="/"><LogoutIcon />Выйти</Link>
			</div>
		</div>
	)
}