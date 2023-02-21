export interface IAuthSlice {
	isAuth: boolean
	isOpenModal: boolean | any
	incorrectDataTry: boolean
}
export interface ITryLoginAction {
	password: string
	login: string
}
