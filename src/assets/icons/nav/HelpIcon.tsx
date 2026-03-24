import React from 'react'

type IProps = {
	active?: boolean
}

export const HelpIcon = ({ active = false }: IProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
				 stroke={active ? '#3c61dd' : 'currentColor'} strokeWidth="2" className="lucide lucide-circle-help w-4 h-4">
			<circle cx="12" cy="12" r="10"></circle>
			<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
			<path d="M12 17h.01"></path>
		</svg>
	)
}