import { ReactNode } from 'react'
import s from './IconBlock.module.scss'

type IProps = {
	width: number
	height: number
	children: ReactNode
	bgColor?: string
}

export const IconBlock = ({ width, height, children, bgColor }: IProps) => {
	return (
		<div
			style={{ width, height, background: bgColor ? bgColor : 'linear-gradient(90deg, #2f55d4 0%, #4f46e5 100%)' }}
			className={s.icon_wrapper}
		>
			{children}
		</div>
	)
}
