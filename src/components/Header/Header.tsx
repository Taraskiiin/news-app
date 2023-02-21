import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'

import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { open, logout } from '../../redux/authSlice'
import CustomButton from '../UI/Button'

const Header = () => {
	const dispatch = useAppDispatch()
	const isAuth = useAppSelector<boolean>(state => state.auth.isAuth)

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}
	const handleCloseModal = () => dispatch(open())
	const handleClickLogOut = () => dispatch(logout())

	return (
		<AppBar sx={{ height: '60px' }}>
			<Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}>
					<MenuIcon />
				</IconButton>
				<Box sx={{ mr: 2, display: { xs: 'none', md: 'block' } }}>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/news">News</NavLink>
					<NavLink to="/profile">Profile</NavLink>
				</Box>
				{isAuth ? (
					<div>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleMenu}
							color="inherit">
							<AccountCircle />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorEl)}
							onClose={handleClose}>
							<MenuItem onClick={handleClickLogOut}>log out</MenuItem>
						</Menu>
					</div>
				) : (
					<CustomButton
						color={'primary'}
						label={'log In'}
						click={handleCloseModal}
					/>
				)}
			</Toolbar>
		</AppBar>
	)
}

export default Header
