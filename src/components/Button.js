import React, { Component } from "react";
import LanguageContexts from "../contexts/LanguageContexts";
import ColourContext from "../contexts/ColourContext";

class Button extends Component {
	colorSubmit(colour) {
		return (
			<button className={`ui button ${colour}`}>
				<LanguageContexts.Consumer>
					{value => (value === "english" ? "Submit" : "Voorleggen")}
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
