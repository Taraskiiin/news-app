import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<div>
			<Link to="/">
				<h3 className="Not-found-text">
					THIS PAGE DOES NOT EXIST. PLEASE TAP HERE
				</h3>
			</Link>
		</div>
	)
}

export default HomePage
