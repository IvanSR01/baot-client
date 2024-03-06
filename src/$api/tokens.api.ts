import { TypeTokens } from '@/shared/types/user.type'
import Cookies from 'js-cookie'

export const API_URL: string = 'http://localhost:4200'

export const APP_URL: string = 'http://localhost:5173'

export const saveTokens = ({ accessToken, refreshToken }: TypeTokens): void => {
	Cookies.set('accessToken', accessToken)
	Cookies.set('refreshToken', refreshToken)
}

export const removeTokens = (): void => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
}

export const getTokens = (): TypeTokens => {
	return {
		accessToken: Cookies.get('accessToken') || '',
		refreshToken: Cookies.get('refreshToken') || ''
	}
}
