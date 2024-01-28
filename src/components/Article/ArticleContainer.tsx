type InputProp = {
	children: JSX.Element;
};

const ArticleContainer = ({ children }: InputProp) => {
	return <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">{children}</section>;
};

export default ArticleContainer;
