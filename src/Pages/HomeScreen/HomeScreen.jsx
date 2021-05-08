import React, { useState } from "react";
import Logo from "../../Assets/Logo.png";
import "./HomeScreen.css";

function HomeScreen(props) {
	const [userName, setUserName] = useState("");
	const [error, setError] = useState("");

	function joinSession(event) {
		event.preventDefault();
		if (userName.includes(" "))
			return setError(() => "Username cannot contain spaces!");
		//check if the user exists in the chat room or not
		props.getUserName(userName);
	}

	return (
		<div className="home-container">
			<div className="home-heading__container">
				<img src={Logo} alt="Logo" className="home__logo-image" />
				<p className="home__logo-text">NetChat</p>
			</div>
			<p className="home__sub-heading">Join Chat Room 🚀</p>
			<form className="home__form">
				<input
					type="text"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="usernameHelp"
					placeholder="Enter Username"
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
				/>
				<button
					type="submit"
					disabled={!userName}
					className="btn btn-success"
					onClick={joinSession}
				>
					Enter
				</button>
				<p className="text-danger">{error}</p>
			</form>
		</div>
	);
}

export default HomeScreen;
