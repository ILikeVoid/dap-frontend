import {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
	fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
	baseUrl: 'http://localhost:4000/api',
	credentials: 'include'
})

export const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions)

	const url = typeof args === 'string' ? args : args.url

	if (
		result.error?.status === 401 &&
		url !== '/auth/refresh' &&
		url !== '/auth/logout'
	) {
		const refreshResult = await baseQuery(
			{
				url: '/auth/refresh',
				method: 'POST'
			},
			api,
			extraOptions
		)

		if (refreshResult.data) {
			result = await baseQuery(args, api, extraOptions)
		} else {
			await baseQuery(
				{
					url: '/auth/logout',
					method: 'POST'
				},
				api,
				extraOptions
			)
		}
	}

	return result
}