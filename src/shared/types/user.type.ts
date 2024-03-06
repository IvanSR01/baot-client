export interface IUser extends TypeTokens {
	id: string
	email: string
	name: string
	surname: string
	phone: string
}

export type TypeTokens = {
	accessToken: string
	refreshToken: string
}

export interface IStoreUser {
	user: IUser | null
	isLoading: boolean
	error: string
} 