import React, { Fragment } from "react";
import Done from './Done'
import ReactDOM from 'react-dom'
import "./App.css";
// import {hangman1,hangman2,hangman3,hangman4,hangman5,hangman6,hangman7} from "./Hangman.js";
import Hangman from './Hangman'
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			guessedLetters: ["S", "u", "b", "m", "i", "t"],
			currentLetter: "",
			word: ['-', '-', '-', '-', '-', '-'],
			g: false,
			t: 0,
			d: 0
		};
	}
	handleTextChange = this.handleTextChange.bind(this);
	handleSubmit = this.handleSubmit.bind(this);
	handleTextChange(event) {

		this.setState({
			currentLetter: event.target.value,
		});
	}

	handleSubmit(event) {
		const current = this.state.currentLetter;
		const all = this.state.guessedLetters;
		event.preventDefault();
		var w = this.state.word.slice()
		all.map((letter, i) => letter === current ? w[i] = current : console.log(""))
		var c = 0
		all.map((letter) => letter != current ? c += 1 : console.log(""))
		c === all.length ? this.setState({ t: this.state.t + 1 }) : console.log('')
		this.setState({ word: w })
		//w===this.state.guessedLetters.values?console.log("Hello"):console.log(all+this.state.word)
		all.map((letter, i) => letter === w[i] ? this.setState({ d: this.state.d + 1 }) : console.log(''))
		this.state.d === 5 ? ReactDOM.render(<React.StrictMode>
			<Done />
		</React.StrictMode>, document.getElementById('root')) : console.log('')
	}

	render() {
		var x = this.state.t
		var d = 0
		return (
			<div className="App">
				{/*Insert code to render a Hangman component here and pass it information to display the right image*/}
				<hangman />
				<form onSubmit={this.handleSubmit}>
					<br />
					<div className='Hello' >
						<Hangman name={x} />
					</div>
					<br /><br />
					<input
						type="text"
						value={this.state.currentLetter}
						onChange={this.handleTextChange}
					/>
					<button> Submit </button>
					<br />

					<h3>{this.state.word}</h3>
				</form>
			</div>
		);
	}
}

export default App;
