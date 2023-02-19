import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
	return (
		<div>
			<Link to="/">
				<h3>THIS PAGE DOES NOT EXIST. PLEASE TAP HERE</h3>
			</Link>
		</div>
	)
}

export default NotFoundPage
