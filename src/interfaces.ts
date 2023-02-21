export interface IAuthSlice {
	isAuth: boolean
	isOpenModal: boolean
	incorrectDataTry: boolean
}
export interface ITryLoginAction {
	password: string
	login: string
}
