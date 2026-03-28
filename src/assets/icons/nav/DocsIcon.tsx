type IProps = {
	active?: boolean
}

export const DocsIcon = ({ active = false }: IProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			strokeWidth='2'
            stroke={active ? '#3c61dd' : 'currentColor'}
			className="lucide lucide-arrow-down-to-line w-4 h-4"
		>
			<path d='M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z'></path>
			<path d='M14 2v4a2 2 0 0 0 2 2h4'></path>
			<path d='M10 9H8'></path>
			<path d='M16 13H8'></path>
			<path d='M16 17H8'></path>
		</svg>
	)
}
