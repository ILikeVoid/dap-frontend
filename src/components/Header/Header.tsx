'use client'

import React from 'react'
import s from './Header.module.scss'
import { IconBlock } from '@/components/IconBlock/IconBlock'
import { LogoIcon } from '@/assets/icons/LogoIcon'
import Link from 'next/link'
import { CustomButton } from '@/components/CustomButton/CustomButton'
import { Select, Space } from 'antd'
import { COUNTRIES } from '@/shared/constants/countries'
import { useRouter } from 'next/navigation'

export const Header = () => {
	const router = useRouter()

	const handleChangeLanguage = (value: string) => {
		console.log(`selected ${value}`)
	}

	return (
		<header className={s.header}>
			<div className={`container ${s.header_items_wrapper}`}>
				<div className={s.logo}>
					<IconBlock width={40} height={40}><LogoIcon /></IconBlock>
					<div className={s.logo_text}>Payroll Wallet</div>
				</div>
				<div className={s.options}>
					<Space wrap>
						<Select
							defaultValue={`${COUNTRIES[0].flag} ${COUNTRIES[0].language}`}
							style={{ width: 120 }}
							onChange={handleChangeLanguage}
							options={COUNTRIES.map(item => ({ value: item.code, label: `${item.flag} ${item.language}` }))}
						/>
					</Space>
					<div className={s.account}>
						<Link href="/sign-in" className="link">Войти</Link>
						<CustomButton onClick={() => router.replace('/sign-up')} className={s.button}
													isGradient>Регистрация</CustomButton>
					</div>
				</div>
			</div>
		</header>
	)
}