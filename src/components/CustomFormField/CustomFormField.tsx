import React, { useState } from 'react'
import s from './CustomFormField.module.scss'
import { Controller, FieldValues } from 'react-hook-form'
import { Input } from 'antd'
import { CustomFormFieldProps } from './CustomFormField.types'
import { PhoneCountyOptions } from '@/components/PhoneCountyOptions/PhoneCountyOptions'
import { IMaskInput } from 'react-imask'
import { COUNTRIES } from '@/shared/constants/countries'

type Country = (typeof COUNTRIES)[number]

export const CustomFormField = <T extends FieldValues>(props: CustomFormFieldProps<T>) => {
	const { name, placeholder, errors, control, label, prefix, type = 'text', withErrors = false, isSubmitted = false } = props

	const [isFocusPhoneInput, setIsFocusPhoneInput] = useState(false)
	const [openSelector, setOpenSelector] = useState(false)
	const [country, setCountry] = useState<Country>(COUNTRIES[0])

	const fieldError = errors?.[name]
	const errorMessage = fieldError?.message
	const showError = isSubmitted && !!errorMessage

	return (
		<div className={s.container}>
			{label && <span className={s.label}>{label}</span>}
			<Controller
				name={name}
				control={control}
				render={({ field }) => {
					if (type === 'password') {
						return (
							<Input.Password
								{...field}
								placeholder={placeholder ?? ''}
								className={s.input}
								status={showError ? 'error' : ''}
								autoComplete="new-password"
							/>
						)
					}

					if (type === 'phone') {
						return (
							<div
								className={`${s.phone_input_wrapper} ${isFocusPhoneInput ? s.focus : ''} ${openSelector ? s.open_selector_county_phone : ''} ${showError ? s.error : ''}`}
							>
								<PhoneCountyOptions
									country={country}
									onChange={setCountry}
									openSelector={openSelector}
									setOpenSelector={setOpenSelector}
								/>
								<IMaskInput
									mask={country.mask}
									placeholderChar={placeholder ?? ''}
									value={field.value ?? ''}
									onAccept={(value) => field.onChange(value)}
									onFocus={() => setIsFocusPhoneInput(true)}
									onBlur={() => {
										field.onBlur()
										setIsFocusPhoneInput(false)
									}}
									inputRef={field.ref}
									placeholder={country.mask}
									className={`ant-input ${s.input}`}
									autoComplete="off"
								/>
							</div>
						)
					}

					return (
						<Input
							{...field}
							placeholder={placeholder ?? ''}
							className={s.input}
							status={showError ? 'error' : ''}
							autoComplete="off"
							prefix={prefix ?? ''}
						/>
					)
				}}
			/>

			{withErrors && (
				<div className={s.error_text} style={{ visibility: showError ? 'visible' : 'hidden' }}>
					{showError ? String(errorMessage) : 'none'}
				</div>
			)}
		</div>
	)
}
