import React from 'react'
import s from './CustomFormField.module.scss'
import { FieldValues } from 'react-hook-form'
import { Input } from 'antd'
import { CustomFormFieldProps } from './CustomFormField.types'

export const CustomFormField = <T extends FieldValues>({
	name,
	placeholder,
	errors,
	register,
	label,
	type = 'text',
	withErrors = false
}: CustomFormFieldProps<T>) => {
	const fieldError = errors?.[name]

	return (
		<div className={s.container}>
			{label && <span className={s.label}>{label}</span>}
			{type === 'password' ? (
				<Input.Password {...register(name)} placeholder={placeholder} className={s.input} />
			) : (
				<Input {...register(name)} placeholder={placeholder} className={s.input} />
			)}
			{withErrors && (
				<div style={{ visibility: fieldError ? 'visible' : 'hidden' }}>
					{fieldError ? (fieldError.message as string) : 'none'}
				</div>
			)}
		</div>
	)
}
