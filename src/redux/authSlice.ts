import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAuthSlice, ITryLoginAction } from '../interfaces'

const userInitialState: IAuthSlice = {
	isAuth: false,
	isOpenModal: true,
	incorrectDataTry: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState: userInitialState,
	reducers: {
		open(state) {
			state.isOpenModal = true
			state.incorrectDataTry = false
		},
		close(state) {
			state.isOpenModal = false
			state.incorrectDataTry = false
		},
		logout(state) {
			state.isAuth = false
		},
		tryLogin(state, action: PayloadAction<ITryLoginAction>) {
			if (
				action.payload.login === process.env.REACT_APP_API_LOGIN &&
				action.payload.password === process.env.REACT_APP_API_PASSWORD
			) {
				state.incorrectDataTry = false
				state.isAuth = true
			} else {
				state.isAuth = false
				state.incorrectDataTry = true
			}
		},
	},
})

export const { open, close, logout, tryLogin } = authSlice.actions
export default authSlice
