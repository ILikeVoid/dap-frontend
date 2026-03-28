export type User = {
	id: number
	name: string
	surname: string
	email: string
	phone: string
	telegram: string | null
	isVerified: boolean
	createdAt: Date,
	updatedAt: Date
}