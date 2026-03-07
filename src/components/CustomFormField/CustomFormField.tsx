import React from 'react'
import s from './CustomFormField.module.scss'
import { FieldErrors, FieldValues, UseFormRegister, Path } from 'react-hook-form'

type IProps<T extends FieldValues> = {
	name: Path<T>
	placeholder: string
	register: UseFormRegister<T>
	errors: FieldErrors<T>
	type?: string
}

export const CustomFormField = <T extends FieldValues>({
	name,
	placeholder,
	errors,
	register,
	type = 'text'
}: IProps<T>) => {
	return (
		<div className={s.container}>
			<input {...register(name)} placeholder={placeholder} type={type} />
			{errors[name] && <p>{errors[name]?.message as string}</p>}
		</div>
	)
}
