import { TArticle7 } from "../../types/TArticle";
import ArticleDate from "./ArticleDate";

type InputProp = {
	data: TArticle7<{subtype: "7"}>;
};

const ArticleDesc = ({ data }: InputProp) => {
	return (
		<div className="mod-caja-nota__descrip" data-testid="articleDesc">
			<h2 className="com-title-acu">
				<a href={data.website_url}>
					<b>{data.headlines.basic}</b>
					{" "+data.promo_items?.basic.subtitle.replace(/&quot;/g, '"')}
				</a>
			</h2>
			<ArticleDate date={data.display_date} />
		</div>
	);
};

export default ArticleDesc;
