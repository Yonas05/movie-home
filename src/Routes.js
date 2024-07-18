import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './Navbar';
import { Box } from '@mui/material';
function Router() {
	return (
		<Box>
			<style>
				{`
		.container {
	background-color: #FFC0CB;
	margin-left: 100px;
	margin-top: 20px;
	font-family: Gabriola, Times, serif;
	margin-right: 100px;
	padding: 20px;
	border: solid;
	border-color: #FF00FF;
	border-radius: 10px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  `}</style>
			<div className="container">

				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route path='/home' element={<Home />} />
					</Routes>
				</BrowserRouter>
			</div>
		</Box>
	);
}

export default Router;
