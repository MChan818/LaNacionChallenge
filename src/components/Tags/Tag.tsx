import { TTaxonomyTags } from "../../types/TArticle";

const Tag = (data: TTaxonomyTags) => {
	return <a href={`/tema/${data.slug}`} data-testid="tag">{data.text}</a>;
};

export default Tag;
