import React from 'react'
import s from './CustomFormField.module.scss'
import { Controller, FieldValues } from 'react-hook-form'
import { Input } from 'antd'
import { CustomFormFieldProps } from './CustomFormField.types'

export const CustomFormField = <T extends FieldValues>(props: CustomFormFieldProps<T>) => {
	const { name, placeholder, errors, control, label, type = 'text', withErrors = false } = props

	const fieldError = errors?.[name]
	const errorMessage = fieldError?.message

	return (
		<div className={s.container}>
			{label && <span className={s.label}>{label}</span>}

			<Controller
				name={name}
				control={control}
				render={({ field }) =>
					type === 'password' ? (
						<Input.Password
							{...field}
							placeholder={placeholder}
							className={s.input}
							status={errorMessage ? 'error' : ''}
							autoComplete='new-password'
						/>
					) : (
						<Input
							{...field}
							placeholder={placeholder}
							className={s.input}
							status={errorMessage ? 'error' : ''}
							autoComplete='off'
						/>
					)
				}
			/>

			{withErrors && (
				<div className={s.error} style={{ visibility: errorMessage ? 'visible' : 'hidden' }}>
					{errorMessage ? String(errorMessage) : 'none'}
				</div>
			)}
		</div>
	)
}
