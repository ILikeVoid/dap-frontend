type IProps = {
	active?: boolean
}

export const ModeratorIcon = ({ active = false }: IProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke={active ? '#3c61dd' : 'currentColor'}
			strokeWidth='2'
			className='lucide lucide-user-check w-4 h-4'
		>
			<path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'></path>
			<circle cx='9' cy='7' r='4'></circle>
			<polyline points='16 11 18 13 22 9'></polyline>
		</svg>
	)
}
