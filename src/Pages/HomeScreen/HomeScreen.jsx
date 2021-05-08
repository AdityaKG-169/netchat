import React from "react";
import Logo from "../../Assets/Logo.png";
import "./HomeScreen.css";

function HomeScreen() {
	return (
		<div className="home-container">
			<div className="home-heading-container"></div>
			<img src={Logo} alt="Logo" width="200px" />
			<p>Enter room for: {window.location.host}</p>
			<form className="home-form">
				<input
					type="text"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="usernameHelp"
					placeholder="Enter Username"
				/>
				<button type="submit" className="btn btn-success" >
					Join Room
				</button>
			</form>
		</div>
	);
}

export default HomeScreen;
