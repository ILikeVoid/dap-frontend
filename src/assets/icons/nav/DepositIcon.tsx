import React from 'react'

type IProps = {
	active?: boolean
}

export const DepositIcon = ({ active = false }: IProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
				 stroke={active ? '#3c61dd' : 'currentColor'}
				 strokeWidth="2" className="lucide lucide-arrow-down-to-line w-4 h-4">
			<path d="M12 17V3"></path>
			<path d="m6 11 6 6 6-6"></path>
			<path d="M19 21H5"></path>
		</svg>
	)
}