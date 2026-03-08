import React from 'react'
import s from './CustomFormField.module.scss'
import { FieldErrors, FieldValues, UseFormRegister, Path } from 'react-hook-form'
import { Input } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

type IProps<T extends FieldValues> = {
	name: Path<T>
	placeholder: string
	register: UseFormRegister<T>
	errors: FieldErrors<T>
	label?: string
	type?: string
}

export const CustomFormField = <T extends FieldValues>({
	name,
	placeholder,
	errors,
	register,
	label,
	type = 'text'
}: IProps<T>) => {
	return (
		<div className={s.container}>
			{label && <span className={s.label}>{label}</span>}
			{type === 'password' ? (
				<Input.Password {...register(name)} placeholder={placeholder} className={s.input} />
			) : (
				<Input {...register(name)} placeholder={placeholder} className={s.input} />
			)}
			<div style={{ visibility: errors[name] ? 'visible' : 'hidden' }}>
				{errors[name] ? (errors[name].message as string) : 'none'}
			</div>
		</div>
	)
}
