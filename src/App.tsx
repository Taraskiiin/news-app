import React from 'react'
import { ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom'

import theme from './theme'

import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/news" element={<NewsPage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</ThemeProvider>
	)
}

export default App
