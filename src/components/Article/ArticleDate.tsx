import { formatDate } from "../../helpers/HelperDate";

type InputProp = {
	date: string;
};

const ArticleDate = ({ date }: InputProp) => {
	return <h4 className="com-date" data-testid="articleDate">{formatDate(date)}</h4>;
};

export default ArticleDate;
