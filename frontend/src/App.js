import React, { useState } from "react";
import "./App.scss";
import {Card, Box, FormControl, OutlinedInput, Fab} from "@material-ui/core";
import {topicService} from './Service.js'

function App() {
	const [topic, setTopic] = useState("")
	const [count, setCount] = useState(-1)

	// UI handling the result
	const decideShownMessage = (newCount) => {newCount === -1 ? showError() : showResult()}
	const showError = () => {document.getElementById("error").classList.remove("Hidden")}
	const showResult = () => {document.getElementById("result").classList.remove("Hidden")}
	const resetResult = () => {
		document.getElementById("error").classList.add("Hidden");
		document.getElementById("result").classList.add("Hidden");
	}

	const handleClick = event => {
		resetResult()
		let newTopic = document.getElementById("input").value
		setTopic(newTopic)
		fetchFromBackend(newTopic)
	}
	
	const fetchFromBackend = topic => {
		topicService.getTopicCount(topic).then((response) => {
			let regex = /\d+$/ //Wants to find number at end of response
			let newCount = parseInt(regex.exec(response)[0])
			setCount(newCount)
			decideShownMessage(newCount)
		}).catch(error => {setCount(-1); decideShownMessage(-1)});
	}

	return (
		<Box className="App">
			<Card className="Container">
				<Box className="IntroContainer">
					<h1>Velkommen</h1>
					<h2>
						Skriv inn tema under:
					</h2>
				</Box>

				<Box className="InputContainer">
					<FormControl fullWidth variant="outlined">
						<OutlinedInput id="input"/>
					</FormControl>
				</Box>

				<Box className="ButtonContainer">
					<Fab
						onClick={handleClick}
						variant="extended"
						id="button"
					>
						<h2>Kall API</h2>
					</Fab>		
				</Box>

				<h2 className="Hidden" id="result">Ordet "{topic}" forekommer {count} ganger i tekstfeltet i artikkelen med samme navn</h2>
				<h2 className="Hidden" id="error">Wikipedia har ingen artikkel om dette temaet</h2>
			</Card>
		</Box>
	);
}

export default App;
