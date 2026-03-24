import { baseApi } from '@/redux/features/baseApi'
import { AuthResponse, LoginDto, RegisterDto, User } from '@/redux/features/auth/auth.types'


export const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<AuthResponse, LoginDto>({
			query: (body) => ({
				url: '/auth/login',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Auth'],
		}),

		register: builder.mutation<AuthResponse, RegisterDto>({
			query: (body) => ({
				url: '/auth/register',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Auth'],
		}),

		getMe: builder.query<User, void>({
			query: () => ({
				url: '/auth/me',
				method: 'GET',
			}),
			providesTags: ['Auth', 'User'],
		}),

		refresh: builder.mutation<AuthResponse, void>({
			query: () => ({
				url: '/auth/refresh',
				method: 'POST',
			}),
			invalidatesTags: ['Auth'],
		}),

		logout: builder.mutation<void, void>({
			query: () => ({
				url: '/auth/logout',
				method: 'POST',
			}),
			invalidatesTags: ['Auth', 'User'],
		}),
	}),
})

export const {
	useLoginMutation,
	useRegisterMutation,
	useGetMeQuery,
	useLazyGetMeQuery,
	useRefreshMutation,
	useLogoutMutation,
} = authApi