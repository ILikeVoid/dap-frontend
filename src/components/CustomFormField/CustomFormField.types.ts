import { Control, FieldErrors, FieldValues, Path } from 'react-hook-form'

type BaseCustomFormFieldProps<T extends FieldValues> = {
	name: Path<T>
	placeholder: string
	control: Control<T>
	label?: string
	type?: string
}

type CustomFormFieldPropsWithErrors<T extends FieldValues> = BaseCustomFormFieldProps<T> & {
	withErrors: true
	errors: FieldErrors<T>
}

type CustomFormFieldPropsWithoutErrors<T extends FieldValues> = BaseCustomFormFieldProps<T> & {
	withErrors?: false
	errors?: FieldErrors<T>
}

export type CustomFormFieldProps<T extends FieldValues> =
	| CustomFormFieldPropsWithErrors<T>
	| CustomFormFieldPropsWithoutErrors<T>