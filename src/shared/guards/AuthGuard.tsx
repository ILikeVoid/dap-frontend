'use client'

import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Spin } from 'antd'
import { useGetMeQuery } from '@/redux/features/auth/authApi'

export const AuthGuard = ({ children }: {children : ReactNode}) => {
	const router = useRouter()
	const { data: user, isLoading, isError } = useGetMeQuery()

	useEffect(() => {
		if (!isLoading && isError) {
			router.replace('/sign-in')
		}
	}, [isLoading, isError, router])

	if (isLoading) {
		return (
			<div
				style={{
					minHeight: '100vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<Spin size="large" />
			</div>
		)
	}

	if (!user) return null

	return <>{children}</>
}