import React from "react"
import helpetLogo from "../images/helpet.png"
import {Link} from "react-router-dom";

export default function Navbar() {
	return (
		<nav>
			<img
				className="nav--logo"
				src= {helpetLogo}
				alt= "helpet-logo"/>
				<div>
		      <Link to="/form">
						<button>
							Give up for adoption
						</button>
					</Link>
					{/*
						<Link to="/about">About Us </Link>
			      <Link to="/shop">Shop Now </Link>
					*/}
		    </div>
		</nav>

	)
}
