import { TArticle } from "../../types/TArticle";
import ArticleDate from "./ArticleDate";
import { formatDate } from "../../helpers/HelperDate";

type InputProp = {
	data: TArticle;
	url: string;
};

const ArticleDesc = ({ data, url }: InputProp) => {
	return (
		<div className="mod-caja-nota__descrip">
			<h2 className="com-title-acu">
				<a href={url}>
					<b>{data.headlines.basic}</b>
					{" " + data.promo_items?.basic.subtitle}
				</a>
			</h2>
			<ArticleDate date={formatDate(data.display_date)} />
		</div>
	);
};

export default ArticleDesc;
