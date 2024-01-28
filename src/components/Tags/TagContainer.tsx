import React from "react";

type InputProp = {
	children: React.ReactNode;
};

const TagContainer = ({ children }: InputProp) => {
	return (
		<div className="row">
			<div className="cont_tags com-secondary-tag hlp-marginBottom-20">{children}</div>
		</div>
	);
};

export default TagContainer;
