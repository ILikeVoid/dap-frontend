import { z } from 'zod'

export const signInSchema = z.object({
	email: z.email({ error: 'Некорректный email' }),
	password: z.string().min(6, { error: 'Минимум 6 символов' })
})

export type SignInSchema = z.infer<typeof signInSchema>