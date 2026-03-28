import { baseApi } from '@/redux/features/baseApi'
import { PaginatedResponse } from '@/shared/types/api.type'
import { Verification } from '@/redux/features/verification/verification.type'

export const verificationApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		createVerification: builder.mutation<void, FormData>({
			query: (body) => ({
				url: '/verification',
				method: 'POST',
				body
			}),
			invalidatesTags: ['Verification']
		}),
		getMyVerificationRequest: builder.query<Verification, void>({
			query: () => ({
				url: '/verification/my-pending',
				method: 'GET'
			}),
			providesTags: ['Verification']
		}),
		getAllVerificationRequests: builder.query<PaginatedResponse<Verification>, { page?: number; limit?: number }>({
			query: ({ page = 1, limit = 10 }) => ({
				url: '/verification',
				method: 'GET',
				params: { page, limit }
			}),
			providesTags: ['Verification']
		}),
		getPending: builder.query<any[], void>({
			query: () => ({
				url: '/verification/pending',
				method: 'GET'
			}),
			providesTags: ['Verification']
		}),
		approveVerificationRequest: builder.mutation<void, string>({
			query: (id) => ({
				url: `/verification/${id}/approve`,
				method: 'PATCH'
			}),
			invalidatesTags: ['Verification']
		}),
		rejectVerificationRequest: builder.mutation<void, { id: string; rejectionReason?: string }>({
			query: ({ id, rejectionReason }) => ({
				url: `/verification/${id}/reject`,
				method: 'PATCH',
				body: { rejectionReason }
			}),
			invalidatesTags: ['Verification']
		})
	})
})

export const {
	useCreateVerificationMutation,
	useGetMyVerificationRequestQuery,
	useGetAllVerificationRequestsQuery,
	useGetPendingQuery,
	useApproveVerificationRequestMutation,
	useRejectVerificationRequestMutation
} = verificationApi
