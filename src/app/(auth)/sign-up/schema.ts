import { z } from 'zod'

export const signUpSchema = z.object({
	name: z.string(),
	surname: z.string(),
	email: z.email({ error: 'Некорректный email' }),
	phone: z.string(),
	password: z.string().min(6, { error: 'Минимум 6 символов' }),
	password_confirm: z.string().min(6, { error: 'Минимум 6 символов' })
})

export type SignUpSchema = z.infer<typeof signUpSchema>
