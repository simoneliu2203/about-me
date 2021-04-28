import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/ui.css";
import reportWebVitals from "./reportWebVitals";
import Logo from "./assets/img/S-CircleLogo.png";
import { Home } from "./components/Home";

// ? for optional
interface MasterWrapperProps {}

// Props and States are to be filled in very soon
interface MasterWrapperState {
	projectName: string;
}

class MasterWrapper extends React.Component<
	MasterWrapperProps,
	MasterWrapperState
> {
	constructor(props: MasterWrapperProps) {
		super(props);
		this.state = { projectName: "Simone Liu" };
	}

	render() {
		return (
			<div className="page_scroll">
				<div className="page_container transition-flip-in-right">
					<div className="nav-header">
						<img className="nav-img" src={Logo} alt="logo" />
						<div className="nav-title">Simone Liu</div>
					</div>
					<Home />
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<BrowserRouter>
		<MasterWrapper />
	</BrowserRouter>,
	document.getElementById("root") as HTMLElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/**
 *
 */
