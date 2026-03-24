'use client'

import { ConfigProvider } from 'antd'
import { ReactNode } from 'react'

const AntdProvider = ({ children }: { children: ReactNode }) => {
	const DEFAULT_COLOR = "#4f46e5"

	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: DEFAULT_COLOR
				},
				components: {
					Input: {}
				}
			}}
		>
			{children}
		</ConfigProvider>
	)
}

export default AntdProvider
