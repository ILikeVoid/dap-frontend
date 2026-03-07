'use client'

import { Button } from 'antd'
import type { ButtonProps } from 'antd'
import React from 'react'

type IProps = ButtonProps & {
	htmlType: 'submit' | 'button' | 'reset'
	isGradient?: boolean
}

const DEFAULT_GRADIENT = 'linear-gradient(90deg, #2f55d4 0%, #4f46e5 100%)'

export const CustomButton = ({ htmlType, isGradient = false, children, ...props }: IProps) => {
	return (
		<Button
			{...props}
			style={{ background: isGradient ? DEFAULT_GRADIENT : '', color: isGradient ? 'white' : 'black' }}
			htmlType={htmlType}
		>
			{children}
		</Button>
	)
}
