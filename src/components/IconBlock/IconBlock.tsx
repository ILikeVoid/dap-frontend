import React, { ReactNode } from 'react'
import s from './IconBlock.module.scss'

type IProps = {
	width: number,
	height: number
	children: ReactNode
}

export const IconBlock = ({ width, height, children }: IProps) => {
	return <div className={s.icon_wrapper} style={{ width, height }}>{children}</div>
}
