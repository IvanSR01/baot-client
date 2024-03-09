import { Fa500Px } from 'react-icons/fa'

export const inputs: TypeData[] = [
	{
		name: 'name',
		svg: 'FaUserAlt' as TypeMaterialIconName,
		placeholder: 'Имя',
	},
	{
		name: 'surname',
		svg: 'FaQuora' as TypeMaterialIconName,
		placeholder: 'Фамилия',
	},
	{
		name: 'phone',
		svg: 'FaPhone' as TypeMaterialIconName,
		placeholder: 'Телефон',
	},
	{
		name: 'email',
		svg: 'FaEnvelope' as TypeMaterialIconName,
		placeholder: 'Email',
	},
]

type TypeData = {
	name: string
	svg: TypeMaterialIconName
	placeholder: string
}

type TypeMaterialIconName =
	| 'Fa500Px'
	| 'FaAccessibleIcon'
	| 'FaPhone'
	| 'FaEnvelope'
	| 'FaLock'
