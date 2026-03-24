'use client'

import s from './sign-in.module.scss'
import { SignInSchema, signInSchema } from './schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CustomFormField } from '@/components/CustomFormField/CustomFormField'
import { CustomButton } from '@/components/CustomButton/CustomButton'
import { IconBlock } from '@/components/IconBlock/IconBlock'
import Link from 'next/link'
import { useLoginMutation } from '@/redux/features/auth/authApi'
import toast from 'react-hot-toast'
import { GuestGuard } from '@/shared/guards/GuestGuard'
import { LogoIcon } from '@/assets/icons/LogoIcon'

const SignInPage = () => {
	const {
		control,
		handleSubmit,
		formState: { errors, isValid, isSubmitted }
	} = useForm<SignInSchema>({
		resolver: zodResolver(signInSchema),
		defaultValues: { email: '', password: '' },
		mode: 'onSubmit',
		reValidateMode: 'onSubmit'
	})

	const [login, { isLoading }] = useLoginMutation()

	const onSubmit = async (data: SignInSchema) => {
		try {
			await toast.promise(
				login(data).unwrap(),
				{
					loading: 'Вход...',
					success: 'Успешная авторизация',
					error: (err: any) =>
						err?.data?.message || 'Ошибка авторизации'
				}
			)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<GuestGuard>
			<div className={s.container}>
				<div className={s.wrapper}>
					<div className={s.header}>
						<IconBlock width={48} height={48}><LogoIcon /></IconBlock>
						<div className={s.header_text}>
							<div className="page_title">С возвращением</div>
							<div className={s.header_info}>Вход в систему</div>
						</div>
					</div>
					<div className="content_box">
						<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
							<CustomFormField<SignInSchema>
								name="email"
								placeholder="employee@gmail.com"
								control={control}
								errors={errors}
								label="Электронная  почта"
								isSubmitted={isSubmitted}
								withErrors
							/>
							<CustomFormField<SignInSchema>
								name="password"
								placeholder="•••••••••"
								label="Пароль"
								type="password"
								control={control}
								errors={errors}
								withErrors
							/>
							<Link href="#" className="link">
								Забыли пароль?
							</Link>
							<CustomButton type="primary"
														htmlType="submit"
														fontSize={16}
														loading={isLoading}
														disabled={!isValid || isLoading}
														isGradient
							>
								Войти
							</CustomButton>
							<div className={s.form_options}>
								<span>Нет аккаунта?</span>
								<Link href="/sign-up" className="link">
									Регистрация
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</GuestGuard>
	)
}

export default SignInPage
