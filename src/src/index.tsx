import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";
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
      <div className="page_scroll">
        <div className="page_container">
          <div className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
              <div className="nav-title">Simone Liu</div>
            </div>
            <div className="nav-btn">
              <label htmlFor="nav-check">
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>

            <nav className="nav-links">
              <a aria-current="page" href="/">
                Home
              </a>
              <a aria-current="page" href="/about">
                About
              </a>
              <a aria-current="page" href="/resume">
                Resume
              </a>
              <a aria-current="page" href="/contact">
                Contact
              </a>
            </nav>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/resume" component={Resume} exact />
            <Route path="/contact" component={Contact} exact />
          </div>
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
