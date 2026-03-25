// redux/features/verification/verification.api.ts
import { baseApi } from '@/redux/features/baseApi'

export const verificationApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		createVerification: builder.mutation<void, FormData>({
			query: (body) => ({
				url: '/verification',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Verification'],
		}),

		getMyPending: builder.query<any, void>({
			query: () => ({
				url: '/verification/my-pending',
				method: 'GET',
			}),
			providesTags: ['Verification'],
		}),

		getAll: builder.query<any[], void>({
			query: () => ({
				url: '/verification',
				method: 'GET',
			}),
			providesTags: ['Verification'],
		}),

		getPending: builder.query<any[], void>({
			query: () => ({
				url: '/verification/pending',
				method: 'GET',
			}),
			providesTags: ['Verification'],
		}),

		approve: builder.mutation<void, string>({
			query: (id) => ({
				url: `/verification/${id}/approve`,
				method: 'PATCH',
			}),
			invalidatesTags: ['Verification'],
		}),

		reject: builder.mutation<void, { id: string; reason: string }>({
			query: ({ id, reason }) => ({
				url: `/verification/${id}/reject`,
				method: 'PATCH',
				body: { reason },
			}),
			invalidatesTags: ['Verification'],
		}),
	}),
})

export const {
	useCreateVerificationMutation,
	useGetMyPendingQuery,
	useGetAllQuery,
	useGetPendingQuery,
	useApproveMutation,
	useRejectMutation,
} = verificationApi