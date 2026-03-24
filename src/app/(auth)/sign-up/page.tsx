'use client'

import s from './sign-up.module.scss'
import { signUpSchema, SignUpSchema } from './schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CustomFormField } from '@/components/CustomFormField/CustomFormField'
import { CustomButton } from '@/components/CustomButton/CustomButton'
import { IconBlock } from '@/components/IconBlock/IconBlock'
import Link from 'next/link'
import { Checkbox, CheckboxChangeEvent } from 'antd'
import { useState } from 'react'
import { useRegisterMutation } from '@/redux/features/auth/authApi'
import { GuestGuard } from '@/shared/guards/GuestGuard'
import toast from 'react-hot-toast'
import { LogoIcon } from '@/assets/icons/LogoIcon'

const SignUpPage = () => {
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitted }
	} = useForm<SignUpSchema>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			name: '',
			surname: '',
			email: '',
			phone: '',
			password: '',
			password_confirm: ''
		},
		mode: 'onSubmit',
		reValidateMode: 'onSubmit'
	})
	const [register, { isLoading }] = useRegisterMutation()

	const [isApprove, setIsApprove] = useState(false)

	const onSubmit = async (data: SignUpSchema) => {
		try {
			await toast.promise(
				register(data).unwrap(),
				{
					loading: 'Регистрация...',
					success: 'Успешная регистрация ',
					error: (err: any) =>
						err?.data?.message || 'Ошибка регистрации'
				}
			)
		} catch (err) {
		}
	}

	const onChangeApprove = (e: CheckboxChangeEvent) => {
		setIsApprove(e.target.checked)
	}

	return (
		<GuestGuard>
			<div className={s.container}>
				<div className={s.wrapper}>
					<div className={s.header}>
						<IconBlock width={48} height={48}><LogoIcon /></IconBlock>
						<div className={s.header_text}>
							<div className="page_title">Создать аккаунт</div>
							<div className={s.header_info}>Создание аккаунта</div>
						</div>
					</div>
					<div className="content_box">
						<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
							<div className={s.name_wrapper}>
								<CustomFormField<SignUpSchema>
									name="name"
									control={control}
									errors={errors} label="Имя *"
									isSubmitted={isSubmitted}
									withErrors
								/>
								<CustomFormField<SignUpSchema>
									name="surname"
									label="Фамилия *"
									control={control}
									errors={errors}
									isSubmitted={isSubmitted}
									withErrors
								/>
							</div>
							<CustomFormField<SignUpSchema>
								name="email"
								placeholder="employee@gmail.com"
								control={control}
								errors={errors}
								label="Электронная почта *"
								isSubmitted={isSubmitted}
								withErrors
							/>
							<CustomFormField<SignUpSchema>
								name="phone"
								placeholder="(000) 000 00-00"
								type="phone"
								label="Телефон *"
								control={control}
								errors={errors}
								isSubmitted={isSubmitted}
								withErrors
							/>
							<CustomFormField<SignUpSchema>
								name="password"
								placeholder="•••••••••"
								label="Пароль *"
								type="password"
								control={control}
								errors={errors}
								isSubmitted={isSubmitted}
								withErrors
							/>
							<CustomFormField<SignUpSchema>
								name="password_confirm"
								placeholder="•••••••••"
								label="Подтвердите пароль *"
								type="password"
								control={control}
								errors={errors}
								isSubmitted={isSubmitted}
								withErrors
							/>
							<Checkbox onChange={(e) => onChangeApprove(e)} className={s.checkbox}>
								Я согласен с правилами и обработкой персональных данных
							</Checkbox>
							<CustomButton type="primary" htmlType="submit" fontSize={16} disabled={!isApprove || isLoading}
														isGradient>
								Регистрация
							</CustomButton>
							<div className={s.form_options}>
								<span>Уже есть аккаунт?</span>
								<Link href="/sign-in" className="link">
									Войти
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</GuestGuard>
	)
}

export default SignUpPage
