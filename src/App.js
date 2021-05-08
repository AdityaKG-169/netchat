import React, { useState, useEffect } from "react";
import ChatScreen from "./Pages/ChatScreen/ChatScreen";
import HomeScreen from "./Pages/HomeScreen/HomeScreen";
import "./App.css";

function App() {
	const [isUserThere, setLoginState] = useState(false);
	const [userName, setUserName] = useState("");

	function addUser(userName) {
		setUserName(() => userName);
		window.localStorage.setItem("userName", userName);
		setLoginState(() => true);
	}

	useEffect(() => {
		if (!window.localStorage.getItem("userName")) return;
		else {
			setUserName(() => window.localStorage.getItem("userName"));
			setLoginState(() => true);
		}
	}, []);

	return (
		<div className="app-container">
			{isUserThere ? (
				<ChatScreen userName={userName} />
			) : (
				<HomeScreen getUserName={addUser} />
			)}
		</div>
	);
}

export default App;
