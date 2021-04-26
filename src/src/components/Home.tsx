import React from "react";

interface HomeProps {}

// Props and States are to be filled in very soon
interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
	constructor(props: HomeProps) {
		super(props);
	}

	render() {
		return (
			<div id="home_page" className="flex_column noselect">
				Home
			</div>
		);
	}
}

export { Home };
