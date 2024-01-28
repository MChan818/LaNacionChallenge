import { TArticle } from "../../types/TArticle";
import ArticleDesc from "./ArticleDesc";
import ArticleImg from "./ArticleImg";

type InputProp = {
	data: TArticle;
};

const Article = ({ data }: InputProp) => {
	return (
		<article className="mod-caja-nota lugares w-100-mobile">
			<ArticleImg src={data.promo_items?.basic.url} url={data.website_url}/>
			<ArticleDesc data={data} url={data.website_url}/>
		</article>
	);
};

export default Article;
