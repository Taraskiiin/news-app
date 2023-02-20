import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Modal from '@mui/material/Modal'
import ClearIcon from '@mui/icons-material/Clear'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

import Button from '../components/UI/Button'

const modalStyles = {
	position: 'fixed',
	top: '50%',
	left: '50%',
	maxWidth: '250px',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'customColors.lightGray',
	border: '2px solid #9E9B98',
	boxShadow: 24,
	display: 'flex',
	flexDirection: 'column',
	alightItems: 'center',
	outline: 'none',
	borderRadius: '16px',
	padding: '5px 10px 20px',
	gap: '10px',
}

const buttonContainerStyles = {
	position: 'absolute',
	top: '5px',
	right: '0',
}

const AuthorizationPage = () => {
	const [open, setOpen] = useState<boolean>(true)
	const [login, setLogin] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const handleClose = () => setOpen(false)
	return (
		<Modal
			open={open}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description">
			<Box component="form" sx={modalStyles} noValidate autoComplete="off">
				<Box
					component="img"
					sx={{ objectFit: 'cover', width: '200px' }}
					src={`${process.env.PUBLIC_URL}/assets/auth.png`}
					alt={`auth illustration`}
					loading="lazy"
				/>
				<TextField id="standard-basic" label="Login" variant="standard" />
				<TextField
					id="standard-basic"
					label="Password"
					variant="standard"
					type="password"
				/>
				<Box sx={buttonContainerStyles}>
					<Button
						icon={<ClearIcon />}
						color={'customColors.DarkGray'}
						click={() => console.log('Hello')}
					/>
				</Box>
				<Button
					icon={<ArrowRightIcon />}
					color={'customColors.DarkGray'}
					label={'Submit'}
					click={() => console.log('Hello')}
				/>
			</Box>
		</Modal>
	)
}

export default AuthorizationPage
