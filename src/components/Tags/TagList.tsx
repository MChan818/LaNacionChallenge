import { useEffect, useState } from "react";
import { TArticles } from "../../types/TArticle";
import Tag from "./Tag";
import { TTags, getOrderedTags } from "../../helpers/HelperArray";

type InputProp = {
	data: TArticles;
};

const TagList = ({ data }: InputProp): React.ReactNode => {
	const [tags, setTags] = useState<TTags[]>();

	useEffect(() => {
		const handleData = () => {
			if (!data) return;
			const auxArticles: TArticles = data;
			setTags(getOrderedTags(auxArticles));
		};
		handleData();
	}, [data]);

	return data && tags ? (
		<div className="row">
			<div id="" className="cont_tags com-secondary-tag hlp-marginBottom-20">
				{tags.map((tag: TTags, index: number) => {
					if (index < 10) return <Tag text={tag.text} slug={tag.slug} key={tag.slug} />;
					return;
				})}
			</div>
		</div>
	) : null;
};

export default TagList;
