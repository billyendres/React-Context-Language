import React, { Component } from "react";
import LanguageContexts from "../contexts/LanguageContexts";
import ColourContext from "../contexts/ColourContext";

class Button extends Component {
	renderSubmit(language) {
		return language === "english" ? "Submit" : "Voorleggen";
	}

	colorSubmit(colour) {
		return (
			<button className={`ui button ${colour}`}>
				<LanguageContexts.Consumer>
					{({ language }) => this.renderSubmit(language)}
				</LanguageContexts.Consumer>
			</button>
		);
	}

	render() {
		return (
			<ColourContext.Consumer>
				{colour => this.colorSubmit(colour)}
			</ColourContext.Consumer>
		);
	}
}

export default Button;
