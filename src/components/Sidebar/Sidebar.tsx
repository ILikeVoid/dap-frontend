import React, { ReactNode } from 'react'
import s from './Sidebar.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IconBlock } from '@/components/IconBlock/IconBlock'
import { LogoIcon } from '@/assets/icons/LogoIcon'

import { LogoutIcon } from '@/assets/icons/nav/LogoutIcon'

type SidebarItem = {
	key: string
	icon: ReactNode
	label: string
	href: string
}

type IProps = {
	items: SidebarItem[]
	title: string
	iconBgColor?: string
}

export const Sidebar = ({ items, title, iconBgColor }: IProps) => {
	const pathname = usePathname()

	const isActive = (path: string) => pathname === path

	return (
		<div className={s.sidebar}>
			<div className={s.logo}>
				<IconBlock width={40} height={40} bgColor={iconBgColor}>
					<LogoIcon />
				</IconBlock>
				{title}
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
				<Link href='/'>
					<LogoutIcon />
					Выйти
				</Link>
			</div>
		</div>
	)
}
