import React from "react";

interface AboutProps {}

// Props and States are to be filled in very soon
interface AboutState {}

class About extends React.Component<AboutProps, AboutState> {
	constructor(props: AboutProps) {
		super(props);
	}

	render() {
		return (
			<div id="about_page" className="flex_column noselect">
				About
			</div>
		);
	}
}

export { About };
