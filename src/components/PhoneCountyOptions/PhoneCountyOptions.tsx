import React from 'react'
import s from './PhoneCountyOptions.module.scss'
import { COUNTRIES } from '@/shared/constants/countries'

type Props = {
	openSelector: boolean
	setOpenSelector: React.Dispatch<React.SetStateAction<boolean>>
	country: Country
	onChange: (country: Country) => void
}

type Country = (typeof COUNTRIES)[number]

export const PhoneCountyOptions = ({ openSelector, setOpenSelector, country, onChange }: Props) => {
	return (
		<div className={`${s.container} ${openSelector ? s.openSelectorContainer : ''}`}>
			<div
				className={`${s.country} ${s.default_country}` }
				onClick={() => setOpenSelector(prev => !prev)}
			>
				<div className={s.flag}>{country.flag}</div>
				<div className={s.phone}>{country.phone}</div>
			</div>
			{openSelector && (
				<div className={s.selector}>
					{COUNTRIES.filter(item => item.code !== country.code).map(item => (
						<div
							key={item.code}
							className={s.country}
							onClick={() => {
								onChange(item)
								setOpenSelector(false)
							}}
						>
							<div className={s.flag}>{item.flag}</div>
							<div className={s.phone}>{item.phone}</div>
						</div>
					))}
				</div>
			)}
		</div>
	)
}