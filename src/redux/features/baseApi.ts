import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from '@/redux/features/baseQueryWithReauth'

export const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: baseQueryWithReauth,
	tagTypes: ['Auth', 'User'],
	endpoints: () => ({})
})