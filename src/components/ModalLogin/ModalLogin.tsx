import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Modal from '@mui/material/Modal'
import IconButton from '@mui/material/IconButton'
import ClearIcon from '@mui/icons-material/Clear'

import CustomButton from '../UI/Button'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { close, tryLogin } from '../../redux/authSlice'
import ModalSuccessScreen from './ModalSuccessScreen'

export const modalStyles = {
	position: 'fixed',
	top: '50%',
	left: '50%',
	maxWidth: '250px',
	height: '388px',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'customColors.lightGray',
	border: '2px solid #9E9B98',
	boxShadow: 24,
	display: 'flex',
	flexDirection: 'column',
	alightItems: 'center',
	outline: 'none',
	borderRadius: '16px',
	padding: '5px 10px',
	gap: '10px',
}

const buttonContainerStyles = {
	position: 'absolute',
	top: '0',
	right: '10px',
	opacity: '0.7',
	'&:hover': {
		opacity: '0.8',
	},
	'&:active': {
		opacity: '1',
	},
}

const ModalLogin = () => {
	const isOpen = useAppSelector<boolean>(state => state.auth.isOpenModal)
	const isSuccess = useAppSelector<boolean>(state => state.auth.isAuth)
	const incorrectData = useAppSelector<boolean>(
		state => state.auth.incorrectDataTry,
	)

	const dispatch = useAppDispatch()

	const [login, setLogin] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const handleClose = () => dispatch(close())
	const handleSubmit = () => dispatch(tryLogin({ login, password }))

	if (isSuccess) {
		setTimeout(handleClose, 2000)
	}

	return (
		<>
			{isOpen && (
				<Modal
					open={isOpen}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description">
					{isSuccess ? (
						<ModalSuccessScreen />
					) : (
						<Box
							component="form"
							sx={modalStyles}
							style={{
								backgroundColor: incorrectData ? '#FF5733' : '#E1DCE0',
							}}
							noValidate
							autoComplete="off">
							<Box
								component="img"
								sx={{ objectFit: 'cover', width: '200px' }}
								src={`${process.env.PUBLIC_URL}/assets/auth.png`}
								alt={`auth illustration`}
								loading="lazy"
							/>
							<TextField
								id="standard-login"
								label="Login"
								variant="standard"
								onChange={e => setLogin((e.target as HTMLInputElement).value)}
							/>
							<TextField
								id="standard-password"
								label="Password"
								variant="standard"
								type="password"
								onChange={e =>
									setPassword((e.target as HTMLInputElement).value)
								}
								sx={{ marginBottom: '10px' }}
							/>
							<IconButton
								size="large"
								edge="end"
								color="primary"
								aria-label="menu"
								sx={buttonContainerStyles}
								onClick={handleClose}>
								<ClearIcon />
							</IconButton>
							<CustomButton
								color={'customColors.DarkGray'}
								label={'Submit'}
								click={handleSubmit}
							/>
						</Box>
					)}
				</Modal>
			)}
		</>
	)
}

export default ModalLogin
