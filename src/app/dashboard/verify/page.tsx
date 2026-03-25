'use client'

import { useRef, useState } from 'react'
import { CheckOutlined, UploadOutlined } from '@ant-design/icons'
import s from './verify.module.scss'
import { useCreateVerificationMutation } from '@/redux/features/verification/verificationApi'
import { CustomButton } from '@/components/CustomButton/CustomButton'
import toast from 'react-hot-toast'

const VerifyPage = () => {
	const [createVerification, { isLoading }] = useCreateVerificationMutation()

	const [files, setFiles] = useState<{
		passportFront?: File
		passportBack?: File
		selfie?: File
		extraDoc?: File
	}>({})

	const fileInputs = {
		passportFront: useRef<HTMLInputElement>(null),
		passportBack: useRef<HTMLInputElement>(null),
		selfie: useRef<HTMLInputElement>(null),
		extraDoc: useRef<HTMLInputElement>(null)
	}

	const handleSelect = (key: keyof typeof files) => {
		fileInputs[key].current?.click()
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: keyof typeof files) => {
		const file = e.target.files?.[0]
		if (!file) return

		setFiles((prev) => ({
			...prev,
			[key]: file
		}))
	}

	const handleSubmit = async () => {
		if (!files.passportFront || !files.passportBack || !files.selfie) {
			alert('Заполни обязательные поля')
			return
		}

		const formData = new FormData()

		formData.append('passportFront', files.passportFront)
		formData.append('passportBack', files.passportBack)
		formData.append('selfie', files.selfie)

		if (files.extraDoc) {
			formData.append('extraDoc', files.extraDoc)
		}

		try {
			await toast.promise(createVerification(formData).unwrap(), {
				loading: 'Отправка...',
				success: 'Заявка успешно отправлена',
				error: (err: any) => err?.data?.message || 'Ошибка отправки'
			})
		} catch (err) {
			console.log(err)
		}
	}

	const isDisabled = !files.passportFront || !files.passportBack || !files.selfie

	const renderUpload = (title: string, key: keyof typeof files, required?: boolean) => {
		const isUploaded = !!files[key]

		return (
			<div className={`content_box ${s.box}`}>
				<div className={s.section_title}>
					{title} {required && <span>*</span>}
				</div>
				<div className={s.upload} onClick={() => handleSelect(key)}>
					{isUploaded ? (
						<CheckOutlined style={{ fontSize: '28px', color: 'green' }} />
					) : (
						<UploadOutlined style={{ fontSize: '28px' }} />
					)}
					<div>{isUploaded ? files[key]?.name : 'Загрузить файл'}</div>
					<div>{isUploaded ? 'Файл загружен' : 'JPG, PNG, PDF — max 10MB'}</div>
				</div>

				<input
					type='file'
					accept='image/jpeg,image/png,application/pdf'
					ref={fileInputs[key]}
					style={{ display: 'none' }}
					onChange={(e) => handleChange(e, key)}
				/>
			</div>
		)
	}

	return (
		<div className='content-container dashboard_page'>
			<div className='page_title_dashboard'>Верификация личности</div>
			<div className={s.info}>Загрузите документы для подтверждения вашей личности</div>
			{renderUpload('Паспорт (лицевая сторона)', 'passportFront', true)}
			{renderUpload('Паспорт (обратная сторона)', 'passportBack', true)}
			{renderUpload('Селфи с документом', 'selfie', true)}
			{renderUpload('Дополнительный документ', 'extraDoc')}
			<CustomButton
				type='primary'
				className={s.submit}
				isGradient
				onClick={handleSubmit}
				disabled={isLoading || isDisabled}
			>
				{isLoading ? 'Отправка...' : 'Отправить на проверку'}
			</CustomButton>
		</div>
	)
}

export default VerifyPage
