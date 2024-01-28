import { TTaxonomyTags } from "../../types/TArticle";

const Tag = (data: TTaxonomyTags) => {
	return <a href={`/tema/${data.slug}`}>{data.text}</a>;
};

export default Tag;
