import { User } from '@/redux/features/users/users.type'

export type Verification = {
	id: number
	userId: number
	user: User
	passportFront: string
	passportBack: string
	selfie: string
	extraDoc: string
	status: 'PENDING' | 'APPROVED' | 'REJECTED'
	rejectionReason: string | null
	updatedAt: Date
	createdAt: Date
}