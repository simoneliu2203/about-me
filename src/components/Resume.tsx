import React from "react";

interface ResumeProps {}

// Props and States are to be filled in very soon
interface ResumeState {}

class Resume extends React.Component<ResumeProps, ResumeState> {
	constructor(props: ResumeProps) {
		super(props);
	}

	render() {
		return (
			<div id="resume_page" className="flex_column noselect">
				Resume
			</div>
		);
	}
}

export { Resume };
