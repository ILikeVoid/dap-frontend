import React from 'react'

type IProps = {
	active?: boolean
}

export const LogoutIcon = ({ active = false }: IProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"  stroke={active ? '#3c61dd' : 'currentColor'}
				 strokeWidth='2' className="lucide lucide-log-out w-4 h-4">
			<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
			<polyline points="16 17 21 12 16 7"></polyline>
			<line x1="21" x2="9" y1="12" y2="12"></line>
		</svg>
	)
}