import { z } from 'zod'

export const signUpSchema = z
	.object({
		name: z
			.string()
			.min(1, { message: 'Заполните поле' }),

		surname: z
			.string()
			.min(1, { message: 'Заполните поле' }),

		email: z
			.string()
			.min(1, { message: 'Заполните поле' })
			.email({ message: 'Некорректный email' }),

		phone: z
			.string()
			.min(1, { message: 'Заполните поле' }),

		password: z
			.string()
			.min(1, { message: 'Заполните поле' })
			.min(6, { message: 'Минимум 6 символов' }),

		password_confirm: z
			.string()
			.min(1, { message: 'Заполните поле' })
			.min(6, { message: 'Минимум 6 символов' })
	})
	.refine((data) => data.password === data.password_confirm, {
		message: 'Пароли не совпадают',
		path: ['password_confirm']
	})

export type SignUpSchema = z.infer<typeof signUpSchema>