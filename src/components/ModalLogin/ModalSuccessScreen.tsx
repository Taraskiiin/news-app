import React from 'react'
import Box from '@mui/material/Box'

import { modalStyles } from './ModalLogin'

const ModalSuccessScreen = () => {
	return (
		<Box
			component="form"
			sx={modalStyles}
			style={{ backgroundColor: '#AAF0D1', justifyContent: 'center' }}
			noValidate
			autoComplete="off">
			<Box
				component="img"
				sx={{ objectFit: 'cover', width: '200px' }}
				src={`${process.env.PUBLIC_URL}/assets/correct.png`}
				alt={`auth illustration`}
				loading="lazy"
			/>
		</Box>
	)
}

export default ModalSuccessScreen
