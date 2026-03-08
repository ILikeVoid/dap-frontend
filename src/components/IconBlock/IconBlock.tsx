import React, { ReactNode } from 'react'
import s from './IconBlock.module.scss'

type IProps = {
	children: ReactNode
}

export const IconBlock = ({ children }: IProps) => {
	return <div className={s.icon_wrapper}>{children}</div>
}
