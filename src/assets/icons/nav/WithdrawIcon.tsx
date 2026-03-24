import React from 'react'

type IProps = {
	active?: boolean
}

export const WithdrawIcon = ({ active = false }: IProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
				 stroke={active ? '#3c61dd' : 'currentColor'} strokeWidth="2"
				 className="lucide lucide-arrow-up-from-line w-4 h-4">
			<path d="m18 9-6-6-6 6"></path>
			<path d="M12 3v14"></path>
			<path d="M5 21h14"></path>
		</svg>
	)
}