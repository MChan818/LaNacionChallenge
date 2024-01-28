import { TArticle, TArticles } from "../../types/TArticle";
import Article from "./Article";

type InputProp = {
	data: TArticles;
};

const ArticleList = ({ data }: InputProp): React.ReactNode => {
	return data
		? data.articles.map((article: TArticle) => {
				if (article.subtype === "7") return <Article data={article} key={article._id} />;
				return;
		})
		: null;
};

export default ArticleList;
