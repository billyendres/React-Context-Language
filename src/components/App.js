import React, { Component } from "react";
import UserCreate from "./UserCreate";
import LanguageContexts from "../contexts/LanguageContexts";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { language: "" };
	}

	onLanguageChange = language => {
		this.setState({ language: language });
	};

	render() {
		return (
			<div className="ui container">
				<div>
					Select a language:
					<i className="flag au" onClick={() => this.onLanguageChange("english")} />
					<i className="flag nl" onClick={() => this.onLanguageChange("dutch")} />
				</div>
				<LanguageContexts.Provider value={this.state.language}>
					<UserCreate />
				</LanguageContexts.Provider>
			</div>
		);
	}
}

export default App;
