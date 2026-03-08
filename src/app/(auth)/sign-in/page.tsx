'use client'

import s from './sign-in.module.scss'
import { SignInSchema, signInSchema } from './schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CustomFormField } from '@/components/CustomFormField/CustomFormField'
import { CustomButton } from '@/components/CustomButton/CustomButton'
import { WalletOutlined } from '@ant-design/icons'
import { IconBlock } from '@/components/IconBlock/IconBlock'

const SignUpPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<SignInSchema>({
		resolver: zodResolver(signInSchema)
	})

	const onSubmit = (data: SignInSchema) => {
		console.log(data)
	}

	return (
		<div className={s.container}>
			<div className={s.wrapper}>
				<div className={s.header}>
					<IconBlock>
						<WalletOutlined style={{ fontSize: '32px', color: 'white' }} />
					</IconBlock>
					<div className={s.header_text}>
						<div className='page_title'>С возвращением</div>
						<div className={s.header_info}>Вход в систему</div>
					</div>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<CustomFormField<SignInSchema> name='email' placeholder='Email' register={register} errors={errors} label='Электронная  почта'/>
					<CustomFormField<SignInSchema>
						name='password'
						placeholder='•••••••••'
						label='Пароль'
						type='password'
						register={register}
						errors={errors}
					/>
					<CustomButton type='primary' htmlType='submit' isGradient>
						Войти
					</CustomButton>
				</form>
			</div>
		</div>
	)
}

export default SignUpPage
