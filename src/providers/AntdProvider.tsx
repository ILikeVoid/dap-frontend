'use client'

import { ConfigProvider } from 'antd'
import { ReactNode } from 'react'

const AntdProvider = ({ children }: { children: ReactNode }) => {
	const DEFAULT_GRADIENT = '#4f46e5'

	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: DEFAULT_GRADIENT
				},
				components: {
					Input: {
					}
				}
			}}
		>
			{children}
		</ConfigProvider>
	)
}

export default AntdProvider
