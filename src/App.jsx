import React from 'react'
import './styles/style.css'

import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'
import { CreateIssue } from './components/CreateIssue.jsx'
import { HomePage } from './components/HomePage.jsx'
import { CreateProject } from './components/CreateProject.jsx'

const App = () => {
	return (
		<BrowserRouter>
			<div className="active">
				<NavLink to="/">
					Home
				</NavLink>
			</div>

			<div className="active" >
				<NavLink to="/issue">
					Create issue
				</NavLink>
			</div>

			<div className="active" >
				<NavLink to="/project">
					Create project
				</NavLink>
			</div>

			<div className="main">
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route path="/issue" element={<CreateIssue />} />
					<Route path="/project" element={<CreateProject />}/>
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
