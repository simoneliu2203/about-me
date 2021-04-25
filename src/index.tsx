import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./assets/styles/ui.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Resume } from "./components/Resume";
import reportWebVitals from "./reportWebVitals";

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
			<div>
				<Switch>
					{/* If the current URL is /about, this route is rendered
              while the rest are ignored */}
					<Route path="/about">
						<About />
					</Route>

					{/* Note how these two routes are ordered. The more specific
              path="/contact/:id" comes before path="/contact" so that
              route will render when viewing an individual contact */}
					<Route path="/contact/:id">
						<Contact />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>

					{/* If none of the previous routes render anything,
              this route acts as a fallback.
  
              Important: A route with path="/" will *always* match
              the URL because all URLs begin with a /. So that's
              why we put this one last of all */}
					<Route path="/">
						<Home />
					</Route>
				</Switch>
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
