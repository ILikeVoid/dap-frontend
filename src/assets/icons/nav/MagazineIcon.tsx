type IProps = {
	active?: boolean
}

export const MagazineIcon = ({ active = false }: IProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			strokeWidth='2'
            stroke={active ? '#3c61dd' : 'currentColor'}
			className='lucide lucide-book-open w-4 h-4'
		>
			<path d='M12 7v14'></path>
			<path d='M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z'></path>
		</svg>
	)
}
