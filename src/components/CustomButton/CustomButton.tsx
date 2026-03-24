'use client'

import { Button, Spin } from 'antd'
import type { ButtonProps } from 'antd'
import React, { useState } from 'react'

type IProps = ButtonProps & {
	loading?: boolean,
	fontSize?: number
	isGradient?: boolean
	disabled?: boolean
}

const DEFAULT_GRADIENT = 'linear-gradient(90deg, #2f55d4 0%, #4f46e5 100%)'

export const CustomButton = ({
															 fontSize = 14,
															 loading = false,
															 isGradient = false,
															 disabled = false,
															 children,
															 ...props
														 }: IProps) => {
	const [hover, setHover] = useState(false)

	return (
		<Button
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			disabled={disabled ? disabled : false}
			{...props}
			style={{
				fontWeight: '550',
				fontSize: `${fontSize}px`,
				borderRadius: '12px',
				background:
					disabled ? '#D6DAE0' :
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
			{loading ? <Spin /> : children}
		</Button>
	)
}
