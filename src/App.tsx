import React from 'react'
import { Box, ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'

import theme from './theme'

import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/NotFoundPage'

import { Header } from './components/Header'
import { ModalLogin } from './components/ModalLogin'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box
				sx={{
					boxSizing: 'border-box',
					width: '100%',
					heigth: '100%',
					padding: '70px 0 0 0',
					margin: '0',
				}}>
				<Header />
				<ModalLogin />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/news" element={<NewsPage />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Box>
		</ThemeProvider>
	)
}

export default App
