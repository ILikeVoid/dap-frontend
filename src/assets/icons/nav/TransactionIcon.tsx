import React from 'react'

type IProps = {
	active?: boolean
}

export const TransactionIcon = ({ active = false }: IProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
				 stroke={active ? '#3c61dd' : 'currentColor'}
				 strokeWidth="2" className="lucide lucide-history w-4 h-4">
			<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
			<path d="M3 3v5h5"></path>
			<path d="M12 7v5l4 2"></path>
		</svg>
	)
}