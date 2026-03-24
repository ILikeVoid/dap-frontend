'use client'

import { Provider } from 'react-redux'
import React, { ReactNode } from 'react'
import { store } from '@/redux/store'

export const StoreProvider = ({ children }: { children: ReactNode }) => {
	return <Provider store={store}>{children}</Provider>
}