import React from "react";

interface ContactProps {}

// Props and States are to be filled in very soon
interface ContactState {}

class Contact extends React.Component<ContactProps, ContactState> {
	constructor(props: ContactProps) {
		super(props);
	}

	render() {
		return (
			<div id="contact_page" className="flex_column noselect">
				Contact
			</div>
		);
	}
}

export { Contact };
