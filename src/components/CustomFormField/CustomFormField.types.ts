import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form'

export type BaseCustomFormFieldProps<T extends FieldValues> = {
	name: Path<T>
	placeholder: string
	register: UseFormRegister<T>
	label?: string
	type?: string
}

export type CustomFormFieldPropsWithErrors<T extends FieldValues> = BaseCustomFormFieldProps<T> & {
	withErrors: true
	errors: FieldErrors<T>
}

export type CustomFormFieldPropsWithoutErrors<T extends FieldValues> = BaseCustomFormFieldProps<T> & {
	withErrors?: false
	errors?: FieldErrors<T>
}

export type CustomFormFieldProps<T extends FieldValues> =
	| CustomFormFieldPropsWithErrors<T>
	| CustomFormFieldPropsWithoutErrors<T>
