'use client'

import React, { ReactNode } from 'react'
import s from './layout.module.scss'
import { Sidebar } from '@/components/Sidebar/Sidebar'
import { DashboardHeader } from '@/components/DashboardHeader/DashboardHeader'

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {

	return (
		<div className={s.dashboard_layout}>
			<Sidebar />
			<div className={s.content}>
				<DashboardHeader />
				{children}
			</div>
		</div>
	)
}
