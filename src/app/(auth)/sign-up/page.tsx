'use client'

import s from './sign-up.module.scss'
import { signUpSchema, SignUpSchema } from './schema'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CustomFormField } from '@/components/CustomFormField/CustomFormField'
import { CustomButton } from '@/components/CustomButton/CustomButton'
import { WalletOutlined } from '@ant-design/icons'
import { IconBlock } from '@/components/IconBlock/IconBlock'
import Link from 'next/link'
import { Checkbox, CheckboxChangeEvent, CheckboxProps } from 'antd'
import { useState } from 'react'

const SignUpPage = () => {
	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm<SignUpSchema>({
		resolver: zodResolver(signUpSchema),
		defaultValues: { email: '', password: '' },
		mode: 'onSubmit',
		reValidateMode: 'onChange'
	})

	const [isApprove, setIsApprove] = useState(false)

	const onSubmit = (data: SignUpSchema) => {
		console.log(data)
	}

	const onChangeApprove = (e: CheckboxChangeEvent) => {
		setIsApprove(prev => !prev)
	}

	console.log(isApprove)

	return (
		<div className={s.container}>
			<div className={s.wrapper}>
				<div className={s.header}>
					<IconBlock>
						<WalletOutlined style={{ fontSize: '24px', color: 'white' }} />
					</IconBlock>
					<div className={s.header_text}>
						<div className="page_title">Создать аккаунт</div>
						<div className={s.header_info}>Создание аккаунта</div>
					</div>
				</div>
				<div className="content_box">
					<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
						<div className={s.name_wrapper}>
							<CustomFormField<SignUpSchema> name="name" control={control} errors={errors} label="Имя *" withErrors />
							<CustomFormField<SignUpSchema>
								name="surname"
								label="Фамилия *"
								control={control}
								errors={errors}
								withErrors
							/>
						</div>
						<CustomFormField<SignUpSchema>
							name="email"
							placeholder="employee@gmail.com"
							control={control}
							errors={errors}
							label="Электронная почта *"
							withErrors
						/>
						<CustomFormField<SignUpSchema>
							name="phone"
							type="phone"
							placeholder="+7 777 123 45 67"
							label="Телефон"
							control={control}
							errors={errors}
							withErrors
						/>
						<CustomFormField<SignUpSchema>
							name="password"
							placeholder="•••••••••"
							label="Пароль *"
							type="password"
							control={control}
							errors={errors}
							withErrors
						/>
						<CustomFormField<SignUpSchema>
							name="password_confirm"
							placeholder="•••••••••"
							label="Подтвердите пароль *"
							type="password"
							control={control}
							errors={errors}
							withErrors
						/>
						<Checkbox onChange={(e) => onChangeApprove(e)} className={s.checkbox}>
							Я согласен с правилами и обработкой персональных данных
						</Checkbox>
						<CustomButton type="primary" htmlType="submit" fontSize={16} disabled={isApprove} isGradient>
							Регистрация
						</CustomButton>
						<div className={s.form_options}>
							<span>Уже есть аккаунт?</span>
							<Link href="#" className="link">
								Войти
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default SignUpPage
