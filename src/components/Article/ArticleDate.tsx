type InputProp = {
	date: string;
};

const ArticleDate = ({ date }: InputProp) => {
	return <h4 className="com-date">{date}</h4>;
};

export default ArticleDate;
