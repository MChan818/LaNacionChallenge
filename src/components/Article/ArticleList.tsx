import { TArticle7, TArticles } from "../../types/TArticle";
import Article from "./Article";

type InputProp = {
	data: TArticles<{ subtype: "7" } | { subtype: "1" }>;
};

const ArticleList = ({ data }: InputProp): React.ReactNode => {
	return data
		? data.articles.map((article: TArticle7<{ subtype: "7" } | { subtype: "1" }>) => {
				if (article.subtype === "7") {
					const article7: TArticle7<{ subtype: "7" }> = article as TArticle7<{ subtype: "7" }>;
					return <Article data={article7} key={article7._id} />;
				}
				return;
		})
		: null;
};

export default ArticleList;
