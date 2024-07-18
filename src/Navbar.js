import React from "react";
import Icon from './download.jpg'
const NavBar = () => {
	return (
		<div>
			<style>
				{`
          .logo {
            font-size: 12px;
            color: black;
            text-transform: capitalize;
            display: flex; /* Added */
            align-items: center; /* Added */
          }
          .navbar {
            background-color: #FF00FF;
            display: flex;
            color: black;
            font-weight: bold;
            height: 70px;
            border: solid;
            border-color: #FF00FF;
            border-radius: 10px;
            box-shadow: 0 0 120px rgba(240, 43, 197, 0.1);
            margin-top: -20px;
            margin-right: -20.5px;
            margin-left: -20.5px;
            width: 102.85%;
            justify-content: space-between;
            align-items: center;
          }
          .nav-links {
            margin-right: 150px;
            list-style-type: none;
            font-size: 20px;
            display: flex;
            font-weight:bold;
            color: black;
            text-transform: capitalize;

          }
          .nav-links li {
            margin-right: 20px;
          }
          .nav-links li:last-child {
            margin-right: 0;
          }
          li {
            display: inline-block;
            margin-right: 10px;
          }
          a {
            color: black;
            text-decoration: none;
          }
          .icon {
			width: 60px;
            height: 50px;
            margin-right: 10px;
            margin-top: 1px;
            margin-left: 70px; /* Added */
            border-radius: 10%; /* Added */
          }

          .search-container {
            display: flex;
            align-items: center;

          }
          .search-box {
			width:150%;
            padding: 5px;
			font-family: Gabriola, Times, serif;
            font-size: 16px;

            border-radius: 5px;
            margin-right: 10px;
			font-weight:bold
          }
          .search-button {
            padding: 6px 12px;
            font-size: 16px;
			font-family: Gabriola, Times, serif;
            border: none;

            border-radius: 5px;

			 background-color:#FF00FF;
			 font-weight:bold;
            cursor: pointer;
          }
        `}
			</style>

				<div className="navbar">
					<div className="logo">
						<img src={Icon} alt="Logo" className="icon" />
						<h1>
							<a href="/">CinemaHaven</a>
						</h1>
					</div>
					<div className="search-container">
						<input type="text" placeholder="Search..." className="search-box" />
						<button className="search-button">Search</button>
					</div>
					<div className="nav-links">
						<ul>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/movie">Movie</a>
							</li>
							<li>
								<a href="/series">Series</a>
							</li>
							<li>
								<a href="/premium">Premium</a>
							</li>
							<li>
								<a href="/plus-18">18+</a>
							</li>
						</ul>
					</div>


			</div>
		</div>
	);
};

export default NavBar;
