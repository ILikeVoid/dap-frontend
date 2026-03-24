export interface User {
	id: number
	email: string
	name: string
	surname: string
	phone: string
	telegram: string | null
	isVerified: boolean
	createdAt: Date
	updatedAt: Date
}

export interface LoginDto {
	email: string
	password: string
}

export interface RegisterDto {
	name: string
	surname: string
	email: string
	password: string
	phone: string
}

export interface AuthResponse {
	accessToken?: string
	user: User
}