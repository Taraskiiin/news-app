import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/news" element={<NewsPage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	)
}

export default App
