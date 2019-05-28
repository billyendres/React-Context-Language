import React, { Component } from "react";
import LanguageContexts from "../contexts/LanguageContexts";

class LanguageSelector extends Component {
	static contextType = LanguageContexts;

	render() {
		return (
			<div>
				Select a language:
				<i
					className="flag au"
					onClick={() => this.context.onLanguageChange("english")}
				/>
				<i
					className="flag nl"
					onClick={() => this.context.onLanguageChange("dutch")}
				/>
			</div>
		);
	}
}

export default LanguageSelector;
