'use client'

import s from './page.module.scss'
import { Header } from '@/components/Header/Header'
import { GuardLogoIcon } from '@/assets/icons/GuardLogoIcon'
import { CustomButton } from '@/components/CustomButton/CustomButton'
import {
	ArrowRightOutlined,
	CreditCardOutlined,
	GlobalOutlined,
	SafetyOutlined,
	WalletOutlined
} from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import { IconBlock } from '@/components/IconBlock/IconBlock'
import { Footer } from '@/components/Footer/Footer'

export default function Home() {
	const router = useRouter()

	return (
		<div className={s.page}>
			<Header />
			<main className={s.main}>
				<section className={s.title}>
					<div className="container">
						<div className={s.wrapper}>
							<div className={s.small_title}>
								<GuardLogoIcon />
								Payroll Wallet Platform
							</div>
							<div className={s.big_title}>
								Платформа выплат для<br /> сотрудников
							</div>
							<div className={s.middle_title}>
								Безопасное управление зарплатами, бонусами и кошельком — всё в одном месте
							</div>
							<div className={s.options}>
								<CustomButton isGradient className={s.btn} onClick={() => router.replace('/dashboard/control-panel')}>Начать
									работу <ArrowRightOutlined /></CustomButton>
								<CustomButton type="primary" className={s.btn} onClick={() => router.replace('/admin-panel')}>Админ
									панель</CustomButton>
							</div>
						</div>
					</div>
				</section>
				<section className={s.info_cards}>
					<div className={`${s.wrapper} container`}>
						<div className={s.card}>
							<IconBlock width={52} height={52}><WalletOutlined className={s.icon}/></IconBlock>
							<div className={s.card_title}>Цифровой кошелёк</div>
							<div className={s.text}>Управляйте балансом и отслеживайте все операции</div>
						</div>
						<div className={s.card}>
							<IconBlock width={52} height={52}><SafetyOutlined className={s.icon}/></IconBlock>
							<div className={s.card_title}>Верификация KYC</div>
							<div className={s.text}>Быстрая и безопасная верификация документов</div>
						</div>
						<div className={s.card}>
							<IconBlock width={52} height={52}><CreditCardOutlined className={s.icon}/></IconBlock>
							<div className={s.card_title}>Зарплатные начисления</div>
							<div className={s.text}>Автоматический учёт зарплат и бонусов</div>
						</div>
						<div className={s.card}>
							<IconBlock width={52} height={52}><GlobalOutlined className={s.icon}/></IconBlock>
							<div className={s.card_title}>Мультиязычность</div>
							<div className={s.text}>Интерфейс на русском, казахском, кыргызском и узбекском</div>
						</div>
					</div>
				</section>
				<Footer />
			</main>
		</div>
	)
}
