import React from 'react'
import { Box } from '@mui/material'

type TButton = {
	icon?: JSX.Element
	label?: string
	color: string
	click: () => void
}

const buttonStyles = {
	display: 'flex',
	margin: '0',
	alignItems: 'center',
	justifyContent: 'center',
	cursor: 'pointer',
	opacity: '0.6',
	background: 'inherit',
	width: 'min-content',
	fontSize: '18px',
	lineHeigth: '22px',
	fontWeigth: '700',
	letterSpacing: '0.7px',
	textTransform: 'uppercase',
	border: '1px solid #686461',
	borderRadius: '8px',
	padding: '4px 16px',
	whiteSpace: 'nowrap',
	bgcolor: 'customColors.lightBlue',
	color: 'customColors.darkBrown',
	'&:hover': {
		opacity: '0.8',
	},
	'&:active': {
		opacity: '1',
	},
}

const CustomButton = ({ icon, label, color, click }: TButton) => {
	return (
		<Box
			component="button"
			sx={buttonStyles}
			style={{ color: color }}
			onClick={click}>
			{icon && icon} {label && label}
		</Box>
	)
}

export default CustomButton
