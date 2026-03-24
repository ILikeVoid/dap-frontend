import React from 'react'
import s from "./DashboardHeader.module.scss"
import { Select, Space } from 'antd'
import { COUNTRIES } from '@/shared/constants/countries'
import { UserOutlined } from '@ant-design/icons'

export const DashboardHeader = () => {
	const handleChangeLanguage = () => {
		console.log(COUNTRIES)
	}

	return (
		<header className={s.header}>
			<div className={`content-container ${s.container}`}>
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
						<UserOutlined style={{fontSize: '20px'}} />
					</div>
				</div>
			</div>
		</header>
	)
}