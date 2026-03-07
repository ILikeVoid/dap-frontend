import type { Metadata } from 'next'

import React from 'react'

export const metadata: Metadata = {
	title: 'CRM | Вход'
}

export default function AuthorizationLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>
}
