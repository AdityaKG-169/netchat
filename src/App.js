import React, { useState, useEffect } from "react";
import "./App.css";
import ChatScreen from "./Pages/ChatScreen/ChatScreen";
import HomeScreen from "./Pages/HomeScreen/HomeScreen";

function App() {
	const [isUserThere, setLoginState] = useState(false);

	useEffect(() => {
		if (!window.sessionStorage.getItem("userName")) return;
		else setLoginState(() => true);
	}, []);

	return (
		<div className="app-container">
			{isUserThere ? <ChatScreen /> : <HomeScreen />}
		</div>
	);
}

export default App;
