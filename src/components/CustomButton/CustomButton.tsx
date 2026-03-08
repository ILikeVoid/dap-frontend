'use client'

import { Button } from 'antd'
import type { ButtonProps } from 'antd'
import React, { useState } from 'react'

type IProps = ButtonProps & {
	isGradient?: boolean
}

const DEFAULT_GRADIENT = 'linear-gradient(90deg, #2f55d4 0%, #4f46e5 100%)'

export const CustomButton = ({ isGradient = false, children, ...props }: IProps) => {
	const [hover, setHover] = useState(false)

	return (
		<Button
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			{...props}
			style={{
				borderRadius: '12px',
				background:
					isGradient && hover
						? DEFAULT_GRADIENT
						: hover && !isGradient
							? '#D6DAE0'
							: isGradient && !hover
								? DEFAULT_GRADIENT
								: '#EEEFF2',
				color: isGradient ? 'white' : '#151A28'
			}}
		>
			{children}
		</Button>
	)
}
