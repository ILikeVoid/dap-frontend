'use client'

import s from './sign-in.module.scss'
import { SignInSchema, signInSchema } from './schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CustomFormField } from '@/components/CustomFormField/CustomFormField'
import { CustomButton } from '@/components/CustomButton/CustomButton'
import { WalletOutlined } from '@ant-design/icons'
import { IconBlock } from '@/components/IconBlock/IconBlock'
import Link from 'next/link'

const SignUpPage = () => {
	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm<SignInSchema>({
		resolver: zodResolver(signInSchema),
		defaultValues: { email: '', password: '' },
		mode: 'onSubmit',
		reValidateMode: 'onChange'
	})

	const onSubmit = (data: SignInSchema) => {
		console.log(data)
	}

	return (
		<div className={s.container}>
			<div className={s.wrapper}>
				<div className={s.header}>
					<IconBlock>
						<WalletOutlined style={{ fontSize: '24px', color: 'white' }} />
					</IconBlock>
					<div className={s.header_text}>
						<div className='page_title'>С возвращением!</div>
						<div className={s.header_info}>Вход в систему</div>
					</div>
				</div>
				<div className='content_box'>
					<form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
						<CustomFormField<SignInSchema>
							name='email'
							placeholder='employee@gmail.com'
							control={control}
							errors={errors}
							label='Электронная  почта'
							withErrors
						/>
						<CustomFormField<SignInSchema>
							name='password'
							placeholder='•••••••••'
							label='Пароль'
							type='password'
							control={control}
							errors={errors}
							withErrors
						/>
						<Link href='#' className='link'>
							Забыли пароль?
						</Link>
						<CustomButton type='primary' htmlType='submit' fontSize={16} isGradient>
							Войти
						</CustomButton>
						<div className={s.form_options}>
							<span>Нет аккаунта?</span>
							<Link href='#' className='link'>
								Регистрация
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default SignUpPage
