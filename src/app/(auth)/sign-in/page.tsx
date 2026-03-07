'use client'

import s from './sign-in.module.scss'
import { SignInSchema, signInSchema } from './schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CustomFormField } from '@/components/CustomFormField/CustomFormField'
import { CustomButton } from '@/components/CustomButton/CustomButton'

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
			<div className={s.wrapper}></div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<CustomFormField<SignInSchema> name='email' placeholder='Email' register={register} errors={errors} />
				<CustomFormField<SignInSchema>
					name='password'
					placeholder='Password'
					type='password'
					register={register}
					errors={errors}
				/>
				<CustomButton type='primary' htmlType='submit' isGradient>
					Войти
				</CustomButton>
			</form>
		</div>
	)
}

export default SignUpPage
